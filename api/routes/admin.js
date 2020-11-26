const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");
const conn = require("../../connection");
const admin = require("../middleware/admin");

const pool = new Pool({
  connectionString: conn,
});
pool.connect();

//CREATE
router.post("/", admin, (req, res, next) => {
  bcrypt.hash(req.body.phone, 10, (err, hash) => {
    if (err) {
      return res.status(400).json({ message: "Bad Request" });
    } else {
      const id = uniqid("adm");
      pool.query(
        "INSERT INTO admin (id, name, phone, email, password) VALUES ($1, $2, $3, $4, $5);",
        [id, req.body.name, req.body.phone, req.body.email, hash],
        (err, result) => {
          if (err) {
            console.log(err)
            return res.status(400).json({ message: "Bad Request" });
          } else {
            return res.status(201).json({ id: id });
          }
        }
      );
    }
  });
});

router.post("/login", (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email, password FROM admin WHERE status=1 AND email=$1;",
    [req.body.email],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        bcrypt.compare(
          req.body.password,
          result.rows[0].password,
          (err, results) => {
            if (err) {
              return res.status(401).json({ message: "Wrong password" });
            } else {
              if (results) {
                const token = jwt.sign(
                  {
                    type: 1,
                    id: result.rows[0].id,
                    name: result.rows[0].name,
                    phone: result.rows[0].phone,
                    email: result.rows[0].email,
                  },
                  process.env.JWT_PW,
                  {
                    expiresIn: "8h",
                  }
                );
                return res.status(200).json({
                  message: "Authentication Success",
                  token: token,
                });
              } else {
                return res.status(401).json({ message: "Wrong password" });
              }
            }
          }
        );
      } else {
        return res.status(404).json({
          message: "Not found",
        });
      }
    }
  );
});

//RETRIEVE

router.get("/", admin, (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email, status FROM admin WHERE status!=2;",
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

router.get("/:id", admin, (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email FROM admin WHERE id=$1;",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        return res.status(200).json({
          data: result.rows[0],
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
    "UPDATE admin SET name=$1, phone=$2, email=$3 WHERE id=$4;",
    [req.body.name, req.body.phone, req.body.email, req.params.id],
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

router.patch("/password/:id", admin, (req, res, next) => {
  pool.query(
    "SELECT password FROM admin WHERE id=$1",
    [req.params.id],
    (error, result) => {
      if (error) {
        return res.status(400).json({ message: "Bad Request" });
      } else {
        if (result.rowCount) {
          bcrypt.compare(
            req.body.old,
            result.rows[0].password,
            (berror, bresult) => {
              if (berror) {
                return res.status(401).json({ message: "Password Incorrect" });
              } else {
                if (bresult) {
                  bcrypt.hash(req.body.new, 10, (herr, hash) => {
                    if (herr) {
                      return res.status(500).json({ message: herr });
                    } else {
                      pool.query(
                        "UPDATE admin SET password=$1 WHERE id=$2",
                        [hash, req.params.id],
                        (uerror, uresult) => {
                          if (uerror) {
                            return res
                              .status(400)
                              .json({ message: "Bad Request" });
                          } else {
                            if (uresult.rowCount) {
                              return res.json({ message: "Update success" });
                            } else {
                              return res.status(404).json({
                                message: "Not found",
                              });
                            }
                          }
                        }
                      );
                    }
                  });
                } else {
                  return res.status(401).json({ message: "Unauthorized" });
                }
              }
            }
          );
        } else {
          return res.status(404).json({
            message: "Not found",
          });
        }
      }
    }
  );
});

router.delete("/:id", admin, (req, res, next) => {
  pool.query(
    "DELETE FROM admin WHERE id=$1;",
    [req.params.id],
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

module.exports = router;
