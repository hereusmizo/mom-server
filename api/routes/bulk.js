const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const multer = require("multer");
const { Pool } = require("pg");
const conn = require("../../connection");
const admin = require("../middleware/admin");
const mom = require("../middleware/mom");
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

router.post("/", mom, upload.single("image"), (req, res, next) => {
  const id = uniqid();
  var filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "INSERT INTO bulk (id, name, image, description) VALUES ($1, $2, $3, $4);",
    [id, req.body.name, filepath, req.body.description],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ id: id, image: filepath });
      }
    }
  );
});

router.get("/", (req, res, next) => {
  pool.query("SELECT * FROM bulk;", (err, result) => {
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
  });
});

router.get("/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT b.*, h.id as hid FROM bulk as b LEFT JOIN have_bulk as h ON (b.id=h.bulk AND h.mom=$1);",
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

router.patch("/:id", admin, (req, res, next) => {
  pool.query(
    "UPDATE bulk SET name=$1, description=$2 WHERE id=$3;",
    [req.body.name, req.body.description, req.params.id],
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
    "UPDATE bulk SET image=$1 WHERE id=$2;",
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
    "DELETE FROM bulk WHERE id=$1;",
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
