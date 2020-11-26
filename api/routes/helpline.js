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
    "INSERT INTO helpline (id, title, phone) VALUES ($1, $2, $3);",
    [id, req.body.title, req.body.phone],
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
    "SELECT id, title, phone FROM helpline ORDER BY title ASC;",
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
    "UPDATE helpline SET title=$1, phone=$2 WHERE id=$3;",
    [req.body.title, req.body.phone, req.params.id],
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
  pool.query(
    "DELETE FROM helpline WHERE id=$1;",
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
