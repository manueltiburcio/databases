DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT(11) AUTO_INCREMENT,
  userid INT(11) NOT NULL, /* foreign key */
  text VARCHAR(100) NOT NULL,
  roomname VARCHAR(100),
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id INT(11) AUTO_INCREMENT,
  username VARCHAR(40) NOT NULL,
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */


/*get users id


SELECT id FROM users
  WHERE messages IN (SELECT id FROM user_id
                       WHERE name = 'cs');

INSERT INTO messages (text, user_id) VALUES ('msg1', IN (SELECT id FROM users));

INSERT INTO users (username, roomname) VALUES ('Bob', 'Lobby');


SELECT * FROM messages;*/

/*
INSERT INTO messages WHERE user_id IN (SELECT id FROM users);
INSERT INTO messages (text, user_id) VALUES ('test', 1);
UPDATE messages SET text = 'test_2' WHERE text = 'test';
UPDATE messages SET user_id = '2' WHERE user_id = '1';
*/



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

