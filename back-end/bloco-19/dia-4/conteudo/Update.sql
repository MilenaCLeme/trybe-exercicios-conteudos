-- Antes do codigo do update ou delet , executar o codigo abaixo;
SET SQL_SAFE_UPDATES = 0;
-- Para voltar ao normal para travar o update ou delete
SET SQL_SAFE_UPDATES = 1;

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor

SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

SELECT * FROM sakila.actor;
update sakila.actor
set first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.category;
update sakila.category
set `name` = 'Science Fiction'
WHERE `name` = 'Sci-Fi';

SELECT * FROM sakila.film;
update sakila.film
set rental_rate = 25.00
WHERE rating in ('G' , 'PG', 'PG-13') AND length > 100 and replacement_cost > 20.00;