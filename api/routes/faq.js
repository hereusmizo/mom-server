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

//CREATE
router.post("/", admin, (req, res, next) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO faq (id, question, answer, code) VALUES ($1, $2, $3, $4);",
    [id, req.body.question, req.body.answer, req.body.code],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ id: id });
      }
    }
  );
});

//RETRIEVE

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT id, question, answer, code FROM faq ORDER BY code::int ASC;",
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
    "UPDATE faq SET question=$1, answer=$2, code=$3 WHERE id=$4;",
    [req.body.question, req.body.answer, req.body.code, req.params.id],
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

router.delete("/:id", admin, (req, res, next) => {
  pool.query("DELETE FROM faq WHERE id=$1;", [req.params.id], (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Bad Request" });
    } else if (result.rowCount) {
      return res.status(200).json({ message: "Deleted" });
    } else {
      return res.status(404).json({
        message: "Not found",
      });
    }
  });
});

module.exports = router;
