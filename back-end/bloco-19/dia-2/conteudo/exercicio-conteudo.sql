SELECT * FROM sakila.film;

SELECT title, release_year, rating FROM sakila.film;

SELECT COUNT(title) FROM sakila.film;

SELECT * FROM sakila.actor;

SELECT distinct last_name FROM sakila.actor;

SELECT COUNT( distinct last_name) FROM sakila.actor;

SELECT * FROM sakila.actor order by last_name, first_name desc;

SELECT * FROM sakila.language limit 5 offset 1;

SELECT * from sakila.film;

SELECT title, release_year, rental_duration, rating, replacement_cost  FROM sakila.film ORDER BY rental_duration DESC, replacement_cost LIMIT 20;