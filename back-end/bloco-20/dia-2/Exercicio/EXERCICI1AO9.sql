-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
WHERE m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
WHERE m.id = b.movie_id and b.domestic_sales < b.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;
SELECT m.title, b.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
WHERE m.id = b.movie_id ORDER BY b.rating desc;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, 
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, 
-- os dados dos filmes que estão em cartaz nestes cinemas. Retorne os 
-- nomes dos cinemas em ordem alfabética.
SELECT * FROM Pixar.Movies; -- title, year, director, theater_id
SELECT * FROM Pixar.Theater; -- name , location
SELECT t.`name`, t.location, m.title, m.director, m.`year`, m.length_minutes, m.theater_id 
FROM Pixar.Theater AS t 
LEFT JOIN Pixar.Movies AS m
ON m.theater_id = t.id
ORDER BY t.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT m.title, m.director, m.`year`, m.length_minutes, m.theater_id, t.`name`, t.location
FROM Pixar.Movies AS m
RIGHT JOIN Pixar.Theater AS t
ON m.theater_id = t.id
ORDER BY t.`name`; 

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT * FROM Pixar.Movies; -- id, title
SELECT * FROM Pixar.BoxOffice; -- movie_id, rating 

SELECT m.title, b.rating FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id AND b.rating > 7.5;

SELECT title FROM Pixar.Movies WHERE id IN (
	SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE Pixar.Movies.id = movie_id AND rating > 7.5
);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

SELECT m.title, m.`year`, b.rating FROM Pixar.Movies as m 
INNER JOIN Pixar.BoxOffice as b
on m.id = b.movie_id where m.`year` > 2009;

SELECT rating FROM Pixar.BoxOffice WHERE movie_id IN (
	SELECT id FROM Pixar.Movies WHERE `year` > 2009
);

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice; 
SELECT * FROM Pixar.Theater;
SELECT `name`, location FROM Pixar.Theater as b
WHERE EXISTS (
	SELECT * FROM Pixar.Movies 
    WHERE theater_id = b.id
);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT `name`, location FROM Pixar.Theater as b
WHERE NOT EXISTS (
	SELECT * FROM Pixar.Movies 
    WHERE theater_id = b.id
);