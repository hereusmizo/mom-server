const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const path = require("path");
const { Pool } = require("pg");
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
    cb(
      null,
      `${file.originalname.substring(
        0,
        file.originalname.length - 4
      )}(${Date.now()})${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

router.post("/", admin, upload.single("document"), (req, res) => {
  const id = uniqid();
  var filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "INSERT INTO advertisement (id, title, link, active) VALUES ($1, $2, $3, $4);",
    [id, req.body.title, filepath, req.body.active],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ message: "Success" });
      }
    }
  );
});

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT * FROM advertisement WHERE active=true ORDER BY created DESC;",
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
router.get("/list", admin, (req, res, next) => {
  pool.query(
    "SELECT * FROM advertisement ORDER BY created DESC;",
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
    "UPDATE advertisement SET title=$1, link=$2, active=$3 WHERE id=$4;",
    [req.body.title, req.body.link, req.body.active, req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({ message: "Success" });
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
    "DELETE FROM advertisement WHERE id=$1;",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({ message: "Success" });
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

module.exports = router;
