const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const multer = require("multer");
const { Pool } = require("pg");
const conn = require("../../connection");
const admin = require("../middleware/admin");
const mom = require("../middleware/mom");
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

router.post("/", mom, upload.single("image"), (req, res, next) => {
  const id = uniqid();
  var filepath = null;
  if (req.file) {
    filepath = req.file.path;
  }
  pool.query(
    "INSERT INTO product (id, name, price, fssai_id, image, description, mom) VALUES ($1, $2, $3, $4, $5, $6, $7);",
    [
      id,
      req.body.name,
      req.body.price,
      req.body.fssai_id,
      filepath,
      req.body.description,
      req.body.mom,
    ],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        return res.status(201).json({ id: id, image: filepath });
      }
    }
  );
});

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT p.*, m.name as mom_name, m.phone, m.email, m.address, m.contact_person, m.district FROM product as p INNER JOIN mom as m ON (p.mom=m.id) ORDER BY p.status DESC, p.created DESC;",
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
    "UPDATE product SET name=$1, price=$2, fssai_id=$3, description=$4, code=$5 WHERE id=$6;",
    [
      req.body.name,
      req.body.price,
      req.body.fssai_id,
      req.body.description,
      req.body.code,
      req.params.id,
    ],
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

router.patch("/status/:id", admin, (req, res, next) => {
  pool.query(
    "UPDATE product SET status=$1 WHERE id=$2;",
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

router.delete("/:id", mom, (req, res, next) => {
  pool.query(
    "DELETE FROM product WHERE id=$1;",
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
