var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // get all messages
    // select text, username, roomname, id

    var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
                    from messages left outer join users on (messages.userid = users.id) \
                    order by messages.id desc';
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });

  }, // a function which produces all the messages
  create: function (params, callback) {
    // create a message for a user id based on the username
    var queryStr = 'insert into messages(text, userid, roomname) \
                    value (?, (select id from users where username = ? limit 1), ?)';
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