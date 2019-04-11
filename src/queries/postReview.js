const dbConnection = require("../databases/db_connection.js");

const postReviews = (obj, cb) => {
  dbConnection.query("INSERT INTO reviews(person_name, business_id, rating, freshness, tv_quality, banter, mirror_coverage, comment) VALUES ($1, $2, $3, $4, $5, $6, $7, $8); ",
  [obj.person_name, obj.business_id, obj.rating, obj.freshness, obj.tv_quality, obj.banter, obj.mirror_coverage, obj.comment], (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null);

  })
}

module.exports = postReviews;
