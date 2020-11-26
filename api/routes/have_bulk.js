const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const mom = require("../middleware/mom");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", mom, (req, res, next) => {
  const id = uniqid();

  pool.query(
    "INSERT INTO have_bulk (id, bulk, mom) VALUES ($1, $2, $3);",
    [id, req.body.bulk, req.body.mom],
    (err, result) => {
      if (err) {
        console.log(err)
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ id: id });
      }
    }
  );
});

router.delete("/:id", mom, (req, res, next) => {
  pool.query(
    "DELETE FROM have_bulk WHERE id=$1;",
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
