const conn =
  "postgresql://mom:" + process.env.POSTGRESS_PW + "@localhost:5432/mom";
module.exports = conn;
