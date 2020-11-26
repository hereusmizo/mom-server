const express = require("express");
const morgan = require("morgan");
const path = require("path")
const bodyparser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const admin = require("./api/routes/admin");
const bulk_order = require("./api/routes/bulk_order");
const bulk = require("./api/routes/bulk");
const customer = require("./api/routes/customer");
const faq = require("./api/routes/faq");
const have_bulk = require("./api/routes/have_bulk");
const helpline = require("./api/routes/helpline");
const mom = require("./api/routes/mom");
const news = require("./api/routes/news");
const notice = require("./api/routes/notice");
const product = require("./api/routes/product");
const product_order = require("./api/routes/product_order");
const vegetable = require("./api/routes/vegetable");
const query = require("./api/routes/query");

//logging activities

const app = express();
app.use(compression());
app.use(morgan("dev"));

//Parsing the body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors());

//routes
//front
app.use(express.static(path.join(__dirname, "build")));
const routes = [
  "/",
  "/cms",
  "/query",
  "/product",
  "/bulk",
  "/news",
  "/faq",
  "/notice",
  "/helpline",
  "/mom",
  "/admin",
  "/settings",
  "/product/retail",
  "/product/bulk",
  "/contact",
  "/about",
  "/privacy-policy",
  "/profile",
  "/product-order",
  "/bulk-order",
  "/order-history"
];
app.get(routes, function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/uploads", express.static("uploads"));
app.use("/api/admin", admin);
app.use("/api/bulk-order", bulk_order);
app.use("/api/bulk", bulk);
app.use("/api/customer", customer);
app.use("/api/faq", faq);
app.use("/api/have-bulk", have_bulk);
app.use("/api/helpline", helpline);
app.use("/api/mom", mom);
app.use("/api/news", news);
app.use("/api/notice", notice);
app.use("/api/product", product);
app.use("/api/product-order", product_order);
app.use("/api/vegetable", vegetable);
app.use("/api/query", query);

//error handle
app.use((req, res, next) => {
  const error = new Error("Not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});

module.exports = app;
