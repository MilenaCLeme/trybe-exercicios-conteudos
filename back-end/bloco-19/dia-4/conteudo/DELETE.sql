-- Para excluir ou update precisa utilizar essas sequencia;
SET SQL_SAFE_UPDATES = 0;

-- Exclua do banco de dados o ator com o nome de "KARL"
select * FROM sakila.actor;
DELETE FROM sakila.actor WHERE first_name = 'KARL';

-- 12:24:40	DELETE FROM sakila.actor WHERE first_name = 'KARL'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sakila`.`film_actor`, CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE)	0,070 sec
DELETE FROM sakila.film_actor WHERE actor_id = 12;

-- Exclua do banco de dados os atores com o nome de "MATTHEW".
SELECT actor_id FROM sakila.actor WHERE first_name = 'MATTHEW';
DELETE FROM sakila.actor WHERE first_name = 'MATTHEW';

-- 12:30:24	DELETE FROM sakila.actor WHERE first_name = 'MATTHEW'	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`sakila`.`film_actor`, CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor` (`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE)	0,171 sec
DELETE FROM sakila.film_actor WHERE actor_id IN (8, 103, 181);

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
DELETE FROM sakila.film_text WHERE `description` LIKE '%saga%';

-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category .
