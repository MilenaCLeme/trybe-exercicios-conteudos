SELECT * FROM sakila.customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT * FROM sakila.customer WHERE store_id = 2 AND NOT first_name = 'KENNETH' order by first_name;

SELECT title, 'description', release_year, replacement_cost FROM sakila.film WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') order by  replacement_cost DESC, title limit 100;

SELECT * FROM sakila.customer where store_id = 1 and active = 1;

SELECT * FROM sakila.customer WHERE not active = 1 and store_id = 1; 

SELECT * FROM sakila.film WHERE rating = 'NC-17' order by rental_rate, title limit 50;