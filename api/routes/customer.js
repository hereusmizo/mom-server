const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const conn = require("../../connection");
const customer = require("../middleware/customer");
const transporter = require("../middleware/mailer");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(502).json({ messsage: "Bad Gateway" });
    } else {
      const id = uniqid();
      pool.query(
        "INSERT INTO customer (id, name, phone, email, address, password) VALUES ($1, $2, $3, $4, $5, $6)",
        [
          id,
          req.body.name,
          req.body.phone,
          req.body.email,
          req.body.address,
          hash,
        ],
        (err, result) => {
          if (err) {
            return res.status(400).json({ message: "Bad Request" });
          } else {
            const token = jwt.sign(
              {
                id: id,
                name: req.body.name,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                token: null,
                type: 3,
              },
              process.env.JWT_PW
            );
            return res.status(201).json({
              message: "Registration success",
              token: token,
            });
          }
        }
      );
    }
  });
});



router.post("/login", (req, res, next) => {
  pool.query(
    "SELECT id, name, email, address, password, token FROM customer WHERE phone=$1;",
    [req.body.phone],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        bcrypt.compare(
          req.body.password,
          result.rows[0].password,
          (err, results) => {
            if (err) {
              return res.status(401).json({ message: "Wrong Password" });
            } else {
              if (results) {
                const token = jwt.sign(
                  {
                    id: result.rows[0].id,
                    name: result.rows[0].name,
                    phone: req.body.phone,
                    email: result.rows[0].email,
                    address: result.rows[0].address,
                    token: result.rows[0].token,
                    type: 3,
                  },
                  process.env.JWT_PW
                );
                return res.status(200).json({
                  message: "Authentication success",
                  token: token,
                });
              } else {
                return res.status(401).json({ message: "Unauthorized" });
              }
            }
          }
        );
      } else {
        return res.status(404).json({ message: "Not Found" });
      }
    }
  );
});

router.get("/:id", customer, (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email, address FROM customer WHERE id=$1;",
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

router.patch("/password/:id", customer, (req, res, next) => {
  pool.query(
    "SELECT password FROM customer WHERE id=$1",
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } else if (result.rowCount) {
        bcrypt.compare(
          req.body.oldpassword,
          result.rows[0].password,
          (err, results) => {
            if (err) {
              return res.status(401).json({ message: "Wrong Password" });
            }
            if (results) {
              bcrypt.hash(req.body.newpassword, 10, (err, hash) => {
                if (err) {
                  return res
                    .status(500)
                    .json({ message: "Internal Server Error" });
                } else {
                  pool.query(
                    "UPDATE customer SET password=$1 WHERE id=$2",
                    [hash, req.params.id],
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
                }
              });
            } else {
              return res.status(401).json({ message: "Unauthorized" });
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

router.get("/reset/:email", (req, res) => {
  pool.query(
    "SELECT id FROM customer WHERE email=$1;",
    [req.params.email],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      } 
      else if (result.rowCount){
        
        const code = Math.floor(Math.random() * 90000) + 10000;
        res.status(200).json({
          message: "Sent code",
          id: result.rows[0].id,
          code: code,
        });
         return transporter.sendMail({
            from: "Mission Organic Mizoram <momizoram@gmail.com>",
            to: req.params.email,
            subject: "MOM Password Reset Code",
            text: `Your password reset code is ${code}`
          })
      }
      else {
        return res.status(404).json({
          message: "Not Found"
        })
      }
    }
  );
});

router.patch("/reset/:id", (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (herr, hash) => {
    if (herr) {
      return res.status(500).json({ message: herr });
    } else {
      pool.query(
        "UPDATE customer SET password=$1 WHERE id=$2;",
        [hash, req.params.id],
        (uerror, uresult) => {
          if (uerror) {
            return res.status(400).json({ message: uerror.detail });
          } else {
            if (uresult.rowCount) {
              return res.json({ message: "Update success" });
            } else {
              return res.status(404).json({ message: "Not found" });
            }
          }
        }
      );
    }
  });
});

router.patch("/self/:id", customer, (req, res, next) => {
  pool.query(
    "UPDATE customer SET name=$1, phone=$2, email=$3, address=$4 WHERE id=$5;",
    [
      req.body.name,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.params.id,
    ],
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

router.patch("/token/:id", (req, res) => {
  pool.query(
    "UPDATE customer SET token=$1 WHERE id=$2;",
    [req.body.token, req.params.id],
    (error, result) => {
      if (error) {
        return res.status(500).json({ message: error.detail });
      } else {
        return res.json({ message: "Update success" });
      }
    }
  );
});

router.delete("/:id", customer, (req, res, next) => {
  pool.query(
    "DELETE FROM customer WHERE id=$1;",
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
