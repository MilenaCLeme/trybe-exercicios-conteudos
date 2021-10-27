-- Criar banco de dados 
CREATE DATABASE IF NOT EXISTS albuns;

-- Criar tabela do banco de dados (-- Relacionamento detalhado entre tabelas `Artista`, `Album`, `EstiloMusical` e `Cancao)
USE albuns;

CREATE TABLE artista(
	artista_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE estilo_musical(
	estilo_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE album(
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    artista_id INT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    preco DOUBLE NOT NULL,
    estilo_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES artista (artista_id),
    FOREIGN KEY (estilo_id) REFERENCES  estilo_musical (estilo_id)
);

CREATE TABLE cancao(
	cancao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (album_id) REFERENCES album (album_id)
);