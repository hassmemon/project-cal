INSERT INTO users(name, email, password, admin) VALUES('John', 'john@example.com', '$2b$10$oo3oUt7ELD3C2U3Zdh2VQepFTESFBLzEBAz/K2IkdGZh1SOWPLQfq', TRUE );
INSERT INTO users(name, email, password, admin) VALUES('Steeve', 'steeve@example.com', '$2b$10$oo3oUt7ELD3C2U3Zdh2VQepFTESFBLzEBAz/K2IkdGZh1SOWPLQfq', FALSE );
INSERT INTO tasks (name, description, priority, due_date, user_id) VALUES ('Walk the dog', 'Take the dog out, walk around the lake', 0, '2022-03-01', 1);
INSERT INTO tasks (name, description, priority, due_date, user_id) VALUES ('Do the homework', 'Project3', 1, '2022-03-12', 2);