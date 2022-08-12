var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // get all user
    var queryStr = "SELECT * FROM users";
    db.query(queryStr, function(err, results) {
      callback(err, results)
    })
  },
  create: function (params, callback) {
    // create user
    var queryStr = "INSERT INTO users(username) values (?)";
    db.query(queryStr, params, function(err, results) {
      callback(err, results)
    })
  }
};

// module.exports = {
//   getAll: function () {},
//   create: function () {}
// };