SELECT * FROM sakila.film;
SELECT concat(title, ' ',release_year) AS 'Lançamento do filme' FROM sakila.film;
SELECT concat(title, ' ', rating) AS 'Classificação' FROM sakila.film;
SELECT * FROM sakila.address;
SELECT concat(address, ' ', city_id) AS 'Endereço' FROM sakila.address;
