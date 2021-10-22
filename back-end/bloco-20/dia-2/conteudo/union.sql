-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome  Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name FROM sakila.staff;

-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
SELECT first_name FROM sakila.customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM sakila.actor WHERE first_name LIKE '%je%';

-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
(SELECT first_name FROM sakila.actor order by first_name DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff Limit 1)
UNION
(SELECT first_name FROM sakila.customer LIMIT 5 offset 15)
ORDER BY first_name;

-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
(SELECT first_name, last_name FROM sakila.actor ORDER BY first_name, last_name LIMIT 60)
UNION
(SELECT first_name, last_name FROM sakila.customer ORDER BY first_name, last_name LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 offset 45;