-- SELECT * FROM banco_de_dados
-- WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);

-- ou também
-- SELECT * FROM banco_de_dados
-- WHERE coluna IN (expressão);

SELECT * FROM sakila.payment WHERE payment_id in (269, 239, 126, 399, 142);

SELECT * FROM sakila.address WHERE district in ('QLD','Nagasaki','California','Attika', 'Mandalay', 'Nantou', 'Texas');

-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- Fixar o aprendizado
SELECT first_name, last_name, email FROM sakila.customer 
Where last_name in ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy') 
Order by first_name;

SELECT * FROM sakila.customer WHERE address_id  in (172, 173, 174, 175, 176)
Order by first_name;

-- 01/05/2005 e 01/08/2005
SELECT count(*) FROM sakila.rental WHERE return_date between '2005/05/01' AND '2005/08/01' ;

SELECT * FROM sakila.film WHERE rental_duration between 3 and 6 order by rental_duration DESC, title;

SELECT title, rating FROM sakila.film where rating in ('G', 'PG', 'PG-13') order by title limit 500;

