-- CREATE DATABASE mike_book;

USE mike_book;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    primary key(id)
);

CREATE TABLE posts (
    id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    created_on TIMESTAMP DEFAULT current_timestamp,
    content TEXT,
    primary key(id)
);