const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const { Pool } = require("pg");
const conn = require("../../connection");
const mom = require("../middleware/mom");
const all = require("../middleware/all");
const transporter = require("../middleware/mailer");
const customer = require("../middleware/customer");
const admin = require("../middleware/admin");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", (req, res, next) => {
  const id = uniqid();
  pool.query(
    "INSERT INTO product_order (id, product, customer, quantity) VALUES ($1, $2, $3, $4);",
    [id, req.body.product, req.body.customer, req.body.quantity],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });

      } else {
        res.status(201).json({ id: id });
        return transporter.sendMail({
          from: "Mission Organic Mizoram <momizoram@gmail.com>",
          to: req.body.email,
          subject: "New Product Order",
          text: `${req.body.quantity} quantity of ${req.body.name} is ordered by a customer. Please check from MOM Mobile Application.`
        });
      }
    }
  );
});

router.get("/", admin, (req, res, next) => {
  pool.query(
    "SELECT po.id, po.created, po.quantity, po.status, p.name, p.description, p.image, p.fssai_id, p.price, c.name as cname, c.phone, c.email, c.address, m.name as mname FROM product_order as po INNER JOIN product as p ON (po.product=p.id) INNER JOIN customer as c ON (po.customer=c.id) INNER JOIN mom as m ON (p.mom=m.id) ORDER BY po.created DESC;",
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

router.get("/mom/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT po.id, po.created, po.quantity, po.status, p.name, p.description, p.image, p.fssai_id, p.price, c.name as cname, c.phone, c.email, c.address FROM product_order as po INNER JOIN product as p ON (po.product=p.id) INNER JOIN customer as c ON (po.customer=c.id) WHERE p.mom=$1 ORDER BY po.created DESC;",
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

router.get("/:id", customer, (req, res, next) => {
  pool.query(
    "SELECT po.id, po.created, po.quantity, po.status, p.name, p.description, p.image, p.fssai_id, p.price FROM product_order as po INNER JOIN product as p ON (po.product=p.id) WHERE po.customer=$1 ORDER BY po.created DESC;",
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

router.patch("/status/:id", mom, (req, res, next) => {
  pool.query(
    "UPDATE product_order SET status=$1 WHERE id=$2;",
    [req.body.status, req.params.id],
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


router.delete("/:id", all, (req, res, next) => {
  pool.query(
    "DELETE FROM product_order WHERE id=$1;",
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
