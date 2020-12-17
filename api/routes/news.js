const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const firebase = require("../middleware/firebase");
const conn = require("../../connection");
const admin = require("../middleware/admin");
const multer = require("multer");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, uniqid());
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

const sendNotification = (title, body) => {
  pool.query(
    "SELECT distinct token FROM customer WHERE token IS NOT NULL;",
    async (err, result) => {
      if (!err) {
        if (result.rowCount) {
          const tokens = [];
          result.rows.map((a) => {
            return tokens.push(a.token);
          });

          const message = {
            notification: {
              title: title,
              body: body,
            },
          };

          if (tokens.length) {
            try {
              await firebase.messaging().sendToDevice(tokens, message);
              return;
            } catch (error) {
              return;
            }
          }
        }
      } else {
        return;
      }
    }
  );
};

//CREATE
router.post("/", admin, upload.single("image"), (req, res, next) => {
  const id = uniqid();
  var filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "INSERT INTO news (id, title, body, image) VALUES ($1, $2, $3, $4);",
    [id, req.body.title, req.body.body, filepath],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        res.status(201).json({ id: id, image: filepath });
        return sendNotification(req.body.title, req.body.body)
      }
    }
  );
});

//RETRIEVE

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT id, title, body, image as photo, created FROM news ORDER BY created DESC;",
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({
          data: result.rows,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

router.get("/:id", (req, res, next) => {
  pool.query(
    "SELECT id, title, body, image, created FROM news WHERE id=$1;",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({
          data: result.rows,
        });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

//UPDATE

router.patch("/:id", admin, (req, res, next) => {
  pool.query(
    "UPDATE news SET title=$1, body=$2 WHERE id=$3;",
    [req.body.title, req.body.body, req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({ message: "Updated" });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

router.patch("/image/:id", admin, upload.single("image"), (req, res, next) => {
  let filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "UPDATE news SET image=$1 WHERE id=$2;",
    [filepath, req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({ message: "Success", image: filepath });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

router.delete("/:id", admin, (req, res, next) => {
  pool.query(
    "DELETE FROM news WHERE id=$1;",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({ message: "Deleted" });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

module.exports = router;
