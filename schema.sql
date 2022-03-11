drop table if exists tasks;
drop table if exists users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  admin BOOLEAN
);


CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  priority INTEGER NOT NULL,
  due_date TIMESTAMP,
  status boolean default FALSE,
  user_id INTEGER REFERENCES users(id)
);
