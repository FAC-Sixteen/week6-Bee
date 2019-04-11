// SELECT * from reviews
//  INNER JOIN businesses ON business_id = businesses.id
//  WHERE businesses.name = 'Frank''s Fresh Cuts';

const dbConnection = require("../databases/db_connection.js");

const getReviews = (business, cb) => {
  dbConnection.query("SELECT * FROM reviews INNER JOIN businesses ON business_id = businesses.id WHERE businesses.name = $1",
  [business], (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);

  })
}

module.exports = getReviews;
