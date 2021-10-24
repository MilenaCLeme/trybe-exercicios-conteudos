-- Triggers

DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER ;

-- Tabela
CREATE DATABASE IF NOT EXISTS rede_social;

USE rede_social;

CREATE TABLE perfil(
    perfil_id INT PRIMARY KEY auto_increment,
    saldo DECIMAL(10, 2) NOT NULL DEFAULT 0,
    ultima_atualizacao DATETIME,
    acao VARCHAR(50),
    ativo BOOLEAN DEFAULT 1
) engine = InnoDB;

CREATE TABLE log_perfil(
    acao_id INT PRIMARY KEY AUTO_INCREMENT,
    acao VARCHAR(300),
    data_acao DATE
) engine = InnoDB;

USE rede_social;

DELIMITER $$
CREATE TRIGGER trigger_perfil_insert
    BEFORE INSERT ON perfil
    FOR EACH ROW
BEGIN
    SET NEW.ultima_atualizacao = NOW(),
        NEW.acao = 'INSERT';
END $$
DELIMITER ;

CREATE DATABASE IF NOT EXISTS betrybe_automoveis;

USE betrybe_automoveis;

CREATE TABLE carros(
    id_carro INT PRIMARY KEY auto_increment,
    preco DECIMAL(12, 2) NOT NULL DEFAULT 0,
    data_atualizacao DATETIME,
    acao VARCHAR(15),
    disponivel_em_estoque BOOLEAN DEFAULT 0
) engine = InnoDB;

CREATE TABLE log_operacoes(
    operacao_id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_operacao VARCHAR(15) NOT NULL,
    data_ocorrido DATE NOT NULL
) engine = InnoDB;

-- Crie um TRIGGER que, a cada nova inserção feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido, a acao para 'INSERÇÃO' e a coluna disponivel_em_estoque para 1 .
SELECT * FROM betrybe_automoveis.carros;

USE betrybe_automoveis;

DELIMITER $$ 
CREATE TRIGGER incluindo_carros
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN 
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
        NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

INSERT INTO betrybe_automoveis.carros(preco) VALUES
(2000); 

-- Crie um TRIGGER que, a cada atualização feita na tabela carros , defina o valor da coluna data_atualizacao para o momento do ocorrido e a acao para 'ATUALIZAÇÃO' 

USE betrybe_automoveis;

DELIMITER $$
CREATE TRIGGER updateCarros
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN 
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'UPDATE';
END $$

DELIMITER ;

SET SQL_SAFE_UPDATES = 0;

UPDATE betrybe_automoveis.carros
SET disponivel_em_estoque = 10
WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.carros;

-- Crie um TRIGGER que, a cada exclusão feita na tabela carros , envie para a tabela log_operacoes as informações do tipo_operacao como 'EXCLUSÃO' e a data_ocorrido como o momento da operação.

USE betrybe_automoveis

DELIMITER $$
CREATE TRIGGER usando_delete_carros
	AFTER DELETE ON carros
    FOR EACH ROW 
BEGIN 
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSÃO', NOW());
END $$

DELIMITER ;

DELETE FROM carros
WHERE id_carro = 1;

SELECT * FROM betrybe_automoveis.log_operacoes;

