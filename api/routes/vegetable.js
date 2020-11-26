const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const multer = require("multer");
const mom = require("../middleware/mom");
const admin = require("../middleware/admin");
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

//CREATE
router.post("/", mom, upload.single("image"), (req, res, next) => {
  const id = uniqid();
  var filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "INSERT INTO vegetable (id, caption, description, image, mom) VALUES ($1, $2, $3, $4, $5);",
    [id, req.body.caption, req.body.description, filepath, req.body.mom],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ id: id, image: filepath });
      }
    }
  );
});

//RETRIEVE

router.get("/", mom, (req, res, next) => {
  pool.query(
    "SELECT v.id, v.caption, v.description, v.image, v.mom, m.name, m.phone, m.address, v.created FROM vegetable as v INNER JOIN mom as m ON (v.mom=m.id) ORDER BY v.created DESC;",
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

router.patch("/:id", mom, (req, res, next) => {
  pool.query(
    "UPDATE vegetable SET caption=$1, description=$2 WHERE id=$3;",
    [req.body.caption, req.body.description, req.params.id],
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

router.delete("/:id", mom, (req, res, next) => {
  pool.query(
    "DELETE FROM vegetable WHERE id=$1;",
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
