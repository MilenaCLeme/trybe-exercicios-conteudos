-- Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

CREATE DATABASE IF NOT EXISTS zoo;

-- iniciando o exercicio 
-- tabela animal (animal_id, nome, espécie, sexo, idade, localização )
-- cuidador (cuidador_id, nome, gerente_id)
-- gerente (gerente_id, nome)
-- cuidados_animais (cuidados_animais, animal_id, cuidador_id)
USE ZOO;

CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(20) NOT NULL, 
    idade INT NOT NULL,
    localizacao VARCHAR(100) NOT NULL
);

CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes (gerente_id)
);

CREATE TABLE cuidados_animais(
	cuidados_animais_id INT PRIMARY KEY AUTO_INCREMENT, 
    cuidador_id INT NOT NULL,
    animal_id INT NOT NULL, 
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais (animal_id)
);
