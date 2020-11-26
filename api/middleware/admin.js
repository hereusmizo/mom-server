const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_PW);
    if (decoded.type === 1) {
      return next();
    }
    return res.status(401).json({
      message: "Authentication failed",
    });
  } catch (error) {
    return res.status(401).json({
      message: "Authentication failed",
    });
  }
};
