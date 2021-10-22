-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT * FROM  Pixar.Movies AS m 
INNER JOIN Pixar.Theater AS t
INNER JOIN Pixar.BoxOffice AS b
ON m.theater_id = t.id WHERE b.movie_id = m.id AND rating > 8;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT * FROM Pixar.Movies;
SELECT t1.title, t1.length_minutes, t1.director, t2.title, t2.length_minutes, t2.director
FROM Pixar.Movies as t1, Pixar.Movies as t2
WHERE t1.director = t2.director AND t1.title <> t2.title;


-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT title FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id
WHERE b.domestic_sales + b.international_sales > 500000000
AND m.length_minutes > 110;

SELECT title FROM Pixar.Movies 
WHERE id IN (
	SELECT movie_id FROM Pixar.BoxOffice WHERE domestic_sales + international_sales > 500000000
) AND length_minutes > 110;