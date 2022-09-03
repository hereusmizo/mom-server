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

router.post("/", admin, (req, res) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO staff_list (id, priority, name, designation) VALUES ($1, $2, $3, $4);",
    [id, req.body.priority, req.body.name, req.body.designation],
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
    "SELECT * FROM staff_list ORDER BY priority::int;",
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
    "UPDATE staff_list SET priority=$1, name=$2, designation=$3 WHERE id=$4;",
    [req.body.priority, req.body.name, req.body.designation, req.params.id],
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
    "DELETE FROM staff_list WHERE id=$1;",
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
