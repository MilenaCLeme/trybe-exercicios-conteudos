SELECT "This is SQL Exercise, Practice and Solution";
SELECT 24, 255, 555;
SELECT 10 + 15;
SELECT 155 * 5 + 10;
SELECT * FROM Scientists.Scientists;
SELECT * FROM Scientists.Projects;
SELECT Name AS 'NOME DO PROJETO', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists order by Name;
SELECT * FROM Scientists.Projects order by Name DESC;
SELECT CONCAT('O projeto Name precisou de Hours horas para ser concluído ', Hours) FROM Scientists.Projects;
SELECT * FROM Scientists.Projects order by Hours DESC limit 3;
SELECT distinct * FROM Scientists.AssignedTo;
SELECT Name From Scientists.Projects order by Hours DESC limit 1;
SELECT Name From Scientists.Projects order by Hours limit 1 offset 2;
SELECT * From Scientists.Projects order by Hours limit 5;
SELECT concat('Existem Number cientistas na tabela Scientists ', count(*)) FROM Scientists.Scientists;