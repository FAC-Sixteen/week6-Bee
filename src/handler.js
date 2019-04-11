const fs = require('fs');
const querystring = require('query-string');
const path = require('path');
const getReviews = require('./queries/getReviews');
const urlMod = require('url');

const homeHandler = (res) => {
  fs.readFile(path.join(__dirname, '../public/index.html'), (err, file) => {
    if (err) {
      console.log(err);
      return err;
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.end(file);
  });
}

const publicHandler = (req, res) => {
  const url = req.url;
  const extension = path.extname(url);
  console.log('this is the extension', extension);
  const extensionType = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.ico': 'image/vnd.microsoft.icon'
  };
  const filePath = path.join(__dirname, '..', url);
  console.log('this is the filepath', filePath);
  fs.readFile(filePath, (err, file) => {
    if(err) {
      console.log(err);
      return;
    } else {
      res.writeHead(200, {'Content-Type': extensionType[extension]});
      res.end(file);
    };
  });
};

const getReviewHandler = (req, res) => {

  let parsedQuery = urlMod.parse(req.url, true);
  const barberVal= parsedQuery.query.q;
  console.log(barberVal);

};

module.exports = {
  homeHandler,
  publicHandler,
  getReviewHandler
}
