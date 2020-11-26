const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const admin = require("../middleware/admin");
const firebase = require("../middleware/firebase");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

//CREATE


const sendNotification = (caption, description) => {
  pool.query(
    "SELECT distinct token FROM mom WHERE token IS NOT NULL;",
    async (err, result) => {
      if (!err) {
        if (result.rowCount) {
          const tokens = [];
          result.rows.map((a) => {
            return tokens.push(a.token);
          });

          const message = {
            notification: {
              title: caption,
              body: description,
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

router.post("/", admin, (req, res, next) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO notice (id, caption, description) VALUES ($1, $2, $3);",
    [id, req.body.caption, req.body.description],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
         res.status(201).json({ id: id });
         return sendNotification(req.body.caption, req.body.description);

      }
    }
  );
});

//RETRIEVE

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT id, caption, description, created FROM notice ORDER BY created DESC;",
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
    "UPDATE notice SET caption=$1, description=$2 WHERE id=$3;",
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

router.delete("/:id", admin, (req, res, next) => {
  pool.query(
    "DELETE FROM notice WHERE id=$1;",
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
