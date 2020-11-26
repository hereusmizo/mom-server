const express = require("express");
const router = express.Router();
const uniqid = require("uniqid");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const conn = require("../../connection");
const mom = require("../middleware/mom");
const admin = require("../middleware/admin");
const transporter = require("../middleware/mailer");
const pool = new Pool({
  connectionString: conn,
});
pool.connect();

router.post("/", admin, (req, res) => {
  bcrypt.hash(req.body.phone, 10, (err, hash) => {
    if (err) {
      return res.status(502).json({ messsage: "Bad Gateway" });
    } else {
      const id = uniqid();
      pool.query(
        "INSERT INTO mom (id, name, phone, email, address, district, role, contact_person, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
        [
          id,
          req.body.name,
          req.body.phone,
          req.body.email,
          req.body.address,
          req.body.district,
          req.body.role,
          req.body.contact_person,
          hash,
        ],
        (err, result) => {
          if (err) {
            return res.status(400).json({ message: "Bad Request" });
          } else {
            return res.status(201).json({
              id: id,
            });
          }
        }
      );
    }
  });
});

router.post("/login", (req, res, next) => {
  pool.query(
    "SELECT * FROM mom WHERE phone=$1;",
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
                    phone: result.rows[0].phone,
                    email: result.rows[0].email,
                    address: result.rows[0].address,
                    district: result.rows[0].district,
                    role: result.rows[0].role,
                    contact_person: result.rows[0].contact_person,
                    token: result.rows[0].token,
                    type: 2,
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

router.get("/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email, address, district, role, contact_person FROM mom WHERE id=$1;",
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

router.get("/", (req, res, next) => {
  pool.query(
    "SELECT id, name, phone, email, address, district, role, contact_person FROM mom;",

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

router.patch("/password/:id", mom, (req, res, next) => {
  pool.query(
    "SELECT password FROM mom WHERE id=$1",
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
                    "UPDATE mom SET password=$1 WHERE id=$2",
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
    "SELECT id FROM mom WHERE email=$1;",
    [req.params.email],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Bad Request" });
      }
      else if (result.rowCount) {
        const code = Math.floor(Math.random() * 90000) + 10000;
        const token = jwt.sign(
          {
            id: result.rows[0].id,
            code: code,
          },
          process.env.JWT_PW
        );

        transporter.sendMail({
          from: "Mission Organic Mizoram <momizoram@gmail.com>",
          to: req.params.email,
          subject: "MOM Password Reset Code",
          text: `Your password reset code is ${code}`
        }, (err, res) => {
          if (err) {
            return res.status(200).json({
              message: "Error"
            });
          } else {
            return res.status(200).json({
              message: "Sent code",
              token: token,
            });
          }
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
        "UPDATE mom SET password=$1 WHERE id=$2;",
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

router.patch("/self/:id", mom, (req, res, next) => {
  pool.query(
    "UPDATE mom SET name=$1, phone=$2, email=$3, address=$4, contact_person=$5 WHERE id=$6;",
    [
      req.body.name,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.body.contact_person,
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
    "UPDATE mom SET token=$1 WHERE id=$2;",
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

router.patch("/:id", admin, (req, res, next) => {
  pool.query(
    "UPDATE mom SET name=$1, phone=$2, email=$3, address=$4, district=$5, role=$6, contact_person=$7 WHERE id=$8;",
    [
      req.body.name,
      req.body.phone,
      req.body.email,
      req.body.address,
      req.body.district,
      req.body.role,
      req.body.contact_person,
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

router.delete("/:id", mom, (req, res, next) => {
  pool.query("DELETE FROM mom WHERE id=$1;", [req.params.id], (err, result) => {
    if (err) {
      return res.status(400).json({ message: "Bad Request" });
    } else if (result.rowCount) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(404).json({
        message: "Not found",
      });
    }
  });
});

module.exports = router;
