-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

-- FIXAR CONTEUDO
SELECT * FROM sakila.film WHERE title LIKE '_%ace%__';

SELECT * FROM sakila.film WHERE description LIKE '%china';

SELECT * FROM sakila.film WHERE description LIKE '%girl%' and title like '%lord' limit 2;

SELECT * FROM sakila.film WHERE title LIKE '___gon%';

SELECT * FROM sakila.film WHERE title LIKE '___gon%' AND description LIKE '%Documentary%';

SELECT * FROM sakila.film where title LIKE '%academy' OR title LIKE 'mosquito%';

SELECT * FROM sakila.film WHERE description LIKE '%monkey%' AND description like '%sumo%';



