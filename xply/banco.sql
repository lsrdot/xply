CREATE DATABASE xply;
CREATE TABLE Usuario (
    ID int NOT NULL,
    Nome varchar(255),
    Nivel int,
    Experiencia int,
    Email varchar(255),
    PRIMARY KEY (ID)
)

CREATE TABLE Tarefa (
    ID int NOT NULL,
    Titulo varchar(255),
    Dificuldade int,
    PontosDeExperiencia int,
    Descricao varchar(255),
    Status varchar(255),
    PRIMARY KEY (ID)
)

CREATE TABLE Conquista (
    ID int NOT NULL,
    DataConclusao Date,
    Status varchar(255),
    UsuarioId int,
    PRIMARY KEY (ID),
    FOREIGN KEY (UsuarioId) references Usuario(ID)
)