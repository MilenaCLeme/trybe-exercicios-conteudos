SELECT * FROM sakila.staff; 

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`)
values ('Milena', 'Leme', 3, null, 1, 1, 'Mih', null);

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, `active`, username, `password`) values
('Amanda', 'Aura', 4, null, 2, 1, 'Mandy', null),
('Rafael', 'Yuki', 3, null, 2, 1, 'Yuki', null);

SELECT * FROM sakila.actor;
SELECT first_name, last_name FROM sakila.customer limit 5; 

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer limit 5;

SELECT * FROM sakila.category;
INSERT INTO sakila.category (`name`) values
('pet'),
('Aventura'),
('Sobrenatural'),
('drama'),
('Romance');

SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id) values 
(3, 3);