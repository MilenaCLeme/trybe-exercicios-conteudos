CREATE DATABASE IF NOT EXISTS normalization;

USE  normalization;

CREATE TABLE funcionarios(
	func_id INT NOT NULL,
    func_name VARCHAR(50) NOT NULL,
    func_sobrenome VARCHAR(100) NOT NULL,
    func_email VARCHAR(100) NOT NULL,
    func_telefone VARCHAR(100) NOT NULL,
    data_cadastrado DATE NOT NULL,
    CONSTRAINT PRIMARY KEY(func_id)
);

CREATE TABLE setores(
	setor_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    setor_name VARCHAR(50) NOT NULL
);

CREATE TABLE setor_func(
	func_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (func_id) REFERENCES funcionarios(func_id),
    FOREIGN KEY (setor_id) REFERENCES setores(setor_id)
);

INSERT INTO funcionarios(func_id, func_name, func_sobrenome, func_email, func_telefone,  data_cadastrado )
VALUES
(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', 2020-05-05),
(13, 'André', 'Freeman', 'andre199@gmail.com', '(47)99522-4669', 2020-02-05),
(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', 2020-05-05),
(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', 2020-05-05);

INSERT INTO setores(setor_name)
VALUES
('Administração'),
('Vendas'),
('Operacional'),
('Estratégico'),
('Marketing');

INSERT INTO setor_func(func_id, setor_id)
VALUES
(12, 01),
(12, 02),
(13, 03),
(14, 04),
(14, 02),
(15, 05);