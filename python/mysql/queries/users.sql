SELECT * FROM users;
INSERT INTO users (user_id, first_name, last_name, email, created_at, updated_at)
VALUES (1, "Gavina", "Llama", 'doogisemailcom', NOW(),NOW());
UPDATE users SET
email ='doogis@email.com' WHERE user_id = 1;
INSERT INTO users (user_id, first_name, last_name, email, created_at, updated_at)
VALUES (2, "Llama", "Llama", 'maybeme@email.com', NOW(),NOW());
INSERT INTO users (user_id, first_name, last_name, email, created_at, updated_at)
VALUES (3, "seraph", "Llama", 'godadjacent@email.com', NOW(),NOW());
SELECT * from users WHERE email = 'doogis@email.com';
SELECT * from users WHERE user_id = 3;
UPDATE users SET
last_name ='Pancakes' WHERE user_id = 3;
DELETE FROM users WHERE user_id = 2;
SELECT *
FROM users
ORDER BY first_name;
SELECT *
FROM users
ORDER BY first_name DESC;