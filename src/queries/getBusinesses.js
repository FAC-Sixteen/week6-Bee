const dbConnection = require("../databases/db_connection.js");

const getBusinesses = cb => {
  dbConnection.query("SELECT name FROM businesses;", (err, res) => {
    if (err) {
      return cb(err);
    }
    cb(null, res.rows);
    // console.log("Res.rows: ", res.rows);
  });
};

module.exports = getBusinesses;
