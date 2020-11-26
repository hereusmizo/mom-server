const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const mom = require("../middleware/mom");
const all = require("../middleware/all");
const customer = require("../middleware/customer");
const admin = require("../middleware/admin");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", (req, res, next) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO bulk_order (id, bulk, customer, quantity) VALUES ($1, $2, $3, $4);",
    [id, req.body.bulk, req.body.customer, req.body.quantity],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        res.status(201).json({ id: id });
        pool.query(
          "SELECT DISTINCT m.email FROM bulk_order as bo INNER JOIN bulk as b ON (bo.bulk=b.id) INNER JOIN have_bulk as h ON (b.id=h.bulk) INNER JOIN mom as m ON (h.mom=m.id) WHERE b.id=$1 AND bo.created>=h.created;",
          [req.params.id],
          (err, result) => {
            if (err) {
              return;
            } else if (result.rowCount) {
              return transporter.sendMail({
                from: "Mission Organic Mizoram <momizoram@gmail.com>",
                to: result.rows[0].email,
                subject: "New Bulk Product Order",
                text: `${req.body.quantity} MT of ${req.body.name} is ordered by a customer. Please check from MOM Mobile Application.`
              });
            } else {
              return;
            }

          })
      }
    }
  );
});

router.get("/mom/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT bo.bulk FROM bulk_order as bo INNER JOIN have_bulk as h ON (bo.bulk=h.bulk) WHERE h.mom=$1 AND bo.created>=h.created;",
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

router.get("/bulk/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT bo.id, bo.created, bo.quantity, c.name as cname, c.phone, c.address, c.email, b.id as bulk_id, b.name, b.description, b.image FROM bulk_order as bo INNER JOIN customer as c ON (bo.customer=c.id) INNER JOIN bulk as b ON (bo.bulk=b.id) INNER JOIN have_bulk as h ON (b.id=h.bulk) WHERE b.id=$1 AND bo.created>=h.created;",
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

router.get("/", admin, (req, res, next) => {
  pool.query(
    "SELECT bo.id, bo.created, bo.quantity, b.name, b.description, b.image, c.name as cname, c.phone, c.email, c.address FROM bulk_order as bo INNER JOIN bulk as b ON (bo.bulk=b.id) INNER JOIN customer as c ON (bo.customer=c.id) ORDER BY bo.created DESC;",
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

router.get("/:id", customer, (req, res, next) => {
  pool.query(
    "SELECT bo.id, bo.created, bo.quantity, b.name, b.description, b.image FROM bulk_order as bo INNER JOIN bulk as b ON (bo.bulk=b.id) WHERE bo.customer=$1;",
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

router.delete("/:id", all, (req, res, next) => {
  pool.query(
    "DELETE FROM bulk_order WHERE id=$1;",
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
