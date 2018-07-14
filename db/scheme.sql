DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger varchar(255) NOT NULL,
	devoured BOOL NOT NULL default 0,
	primary key (id)
	);
