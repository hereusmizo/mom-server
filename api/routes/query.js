const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const admin = require("../middleware/admin");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", (req, res) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO query (id, name, phone, email, address, message) VALUES ($1, $2, $3, $4, $5, $6);",
    [
      id,
      req.body.name,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.body.message,
    ],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ message: "Success" });
      }
    }
  );
});

router.get("/", admin, (req, res, next) => {
  pool.query("SELECT * FROM query ORDER BY created DESC;", (err, result) => {
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

router.patch("/:id", admin, (req, res, next) => {
  pool.query(
    "UPDATE query SET read=$1 WHERE id=$2;",
    [req.body.read, req.params.id],
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
    "DELETE FROM query WHERE id=$1;",
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
