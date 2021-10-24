-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram.
SELECT * FROM sakila.actor; -- actor_id, first_name
SELECT * FROM sakila.film_actor; -- actor_id, film_id

USE sakila;
DELIMITER $$
CREATE PROCEDURE Exiba10AtoresMaisPopulares()
BEGIN 
	SELECT fa.actor_id, a.first_name, COUNT(fa.film_id) as `quantidade de filme`
    FROM actor as a JOIN film_actor as fa on a.actor_id = fa.actor_id group by fa.actor_id
    order by `quantidade de filme` DESC limit 10; 
END $$
DELIMITER ;

call sakila.Exiba10AtoresMaisPopulares();

-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.
SELECT * FROM sakila.film; -- film_id, title, 
SELECT * FROM sakila.film_category; -- film_id, category_id
SELECT * FROM sakila.category; -- category_id, name

USE sakila;
DELIMITER $$ 

CREATE PROCEDURE TipoDeFilmePorCategoria(IN categoria VARCHAR(100))
BEGIN
	SELECT f.film_id, f.title, c.category_id, c.`name` FROM film AS f JOIN film_category AS fc 
    JOIN category AS c ON c.category_id = fc.category_id AND f.film_id = fc.film_id
    WHERE c.`name` = categoria;
END $$

DELIMITER ;

call sakila.TipoDeFilmePorCategoria('comedy');

-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.
-- Duvida Como assim entra e sai ?  
SELECT * FROM sakila.customer;

USE sakila;
DELIMITER $$
CREATE PROCEDURE ClienteEstaAtivoOuNaoPeloEmail(INOUT emailCliente VARCHAR(300))
BEGIN
	SELECT CONCAT('O cliente esta ativo se 0 não se 1 sim. Numero do client: ', `active`) FROM customer WHERE email = emailCliente; 
END $$ 
DELIMITER ;

SELECT 'MARY.SMITH@sakilacustomer.org' INTO @emailDoCliente;
CALL ClienteEstaAtivoOuNaoPeloEmail(@emailDoCliente);
SELECT @emailDoCliente;

-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .
SELECT * FROM sakila.payment;
SELECT * FROM sakila.rental;

-- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
SELECT * FROM sakila.film;
SELECT * FROM sakila.inventory;

USE sakila;
DELIMITER $$

CREATE FUNCTION NameDoFilmeComIdInventario(id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
	DECLARE title VARCHAR(300);
	SELECT f.title FROM film AS f 
    JOIN inventory AS i ON i.inventory_id = id AND i.film_id = f.film_id
    LIMIT 1
    INTO title;
    RETURN title;
END $$

DELIMITER ;

SELECT NameDoFilmeComIdInventario(10);

-- Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
SELECT * FROM sakila.film_category; -- film_id, category_id
SELECT * FROM sakila.category; -- category_id, name

USE sakila;
DELIMITER $$ 

CREATE FUNCTION QuantidadeDeFilmePorCategoria(category VARCHAR(300))
RETURNS INT READS SQL DATA
BEGIN 
	DECLARE quantidade INT;
		SELECT COUNT(fc.film_id) AS quantidade FROM film_category AS fc 
        JOIN category AS c ON c.category_id = fc.category_id AND c.`name` = category
        GROUP BY fc.category_id LIMIT 1    
    INTO quantidade;
    RETURN quantidade;
END $$
DELIMITER ;

SELECT QuantidadeDeFilmePorCategoria('Comedy');