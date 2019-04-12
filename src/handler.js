const fs = require("fs");
const querystring = require("query-string");
const path = require("path");
const getReviews = require("./queries/getReviews");
const postReview = require("./queries/postReview");
const getBusinesses = require("./queries/getBusinesses");
const urlMod = require("url");

const homeHandler = res => {
  fs.readFile(path.join(__dirname, "../public/index.html"), (err, file) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.end(file);
  });
};

const publicHandler = (req, res) => {
  const url = req.url;
  const extension = path.extname(url);
  console.log("this is the extension", extension);
  const extensionType = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".ico": "image/vnd.microsoft.icon"
  };
  const filePath = path.join(__dirname, "..", url);
  console.log("this is the filepath", filePath);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, { "Content-Type": extensionType[extension] });
      res.end(file);
    }
  });
};

const getReviewHandler = (req, res) => {
  let parsedQuery = urlMod.parse(req.url, true);
  const barberVal = parsedQuery.query.q;
  getReviews(barberVal, (error, response) => {
    if (error) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("no such barber");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  });
};

const postReviewHandler = (req, res) => {
  let parsedQuery = urlMod.parse(req.url, true);
  const object = parsedQuery.query;
  postReview(object, err => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("error, couldn't submit");
    }
    res.writeHead(302, { Location: "/" });
    res.end();
  });
};

const getBusinessesHandler = (req, res) => {
  getBusinesses((err, response) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("server error");
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(response));
  });
};

module.exports = {
  homeHandler,
  publicHandler,
  getReviewHandler,
  postReviewHandler,
  getBusinessesHandler
};
