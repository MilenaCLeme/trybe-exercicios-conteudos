-- INNER JOIN
SELECT t1.coluna, t2.coluna
FROM tabela1 AS t1
INNER JOIN tabela2 AS t2
ON t1.coluna_em_comum = t2.coluna_em_comum;

-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor
SELECT * FROM sakila.actor; -- actor_id, first_name
SELECT * FROM sakila.film_actor; -- actor_id, film_id
SELECT a.first_name, a.actor_id, f.film_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON f.actor_id = a.actor_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
SELECT * FROM sakila.staff; -- first_name, last_name, address_id
SELECT * FROM sakila.address; -- address_id, address
SELECT func.first_name, func.last_name, address.address 
FROM sakila.staff AS func
INNER JOIN sakila.address AS address
ON address.address_id = func.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o endereço onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT * FROM sakila.customer; -- first_name, email, customer_id, address_id
SELECT * FROM sakila.address; -- address_id, address_id
SELECT cliente.customer_id, cliente.first_name, cliente.email, cliente.address_id, address.address
FROM sakila.customer AS cliente
INNER JOIN sakila.address AS address
ON address.address_id = cliente.address_id
order BY cliente.first_name DESC LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
SELECT * FROM sakila.address; -- address_id, address, district expeficio California
SELECT * FROM sakila.customer; -- first_name, email, address_id contêm "rene" em seus nomes
SELECT cliente.first_name, cliente.email, cliente.address_id, address.district
FROM sakila.customer AS cliente
INNER JOIN sakila.address AS address
ON cliente.address_id = address.address_id
WHERE address.district = 'California' AND 
cliente.first_name LIKE '%rene%';

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT * FROM sakila.address; -- address_id
SELECT * FROM sakila.customer; -- first_name, address_id
SELECT c.frist_name, COUNT(a.address) AS `quantidade de endereço`
FROM sakila.customer c
INNER JOIN sakila.address AS a 
ON a.address_id = c.address_id
WHERE c.active = 1
GROUP BY c.first_name
ORDER BY first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.payment; -- amount staff_id
SELECT * FROM sakila.staff; -- last_name, last_name, staff_id
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.first_name, s.last_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query 
 SELECT * FROM sakila.film_actor; -- actor_id, film_id;
 SELECT * FROM sakila.film; -- film_id, title,
 SELECT * FROM sakila.actor; -- actor_id, first_name;
 SELECT a.actor_id, a.first_name, f.film_id, f.title
 FROM sakila.actor as a
 INNER JOIN sakila.film_actor as fact
 INNER JOIN sakila.film as f 
 ON fact.actor_id = a.actor_id AND fact.film_id = f.film_id;
 