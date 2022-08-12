var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // get all messages
    // select text, username, roomname, id

    var queryStr = 'SELECT messages.id, messages.text, messages.roomname, users.username FROM messages \
                    LEFT OUTER JOIN users ON (messages.userid = user.id) \
                    ORDER BY messages.id DESC';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });

  }, // a function which produces all the messages
  create: function () {
    // create a message for a user id based on the username
    var queryStr = 'INSERT INTO messages(text, userid, roomname) \
                    value (?, (SELECT id FROM users WHERE username = ? limit 1), ?)';
    db.query(queryStr, params, function(err, results) {
      callback(err, results);
    });
  } // a function which can be used to insert a message into the database
};


// module.exports = {
//   getAll: function () {},
//   create: function () {}
// };

// a function which can be used to insert a message into the database