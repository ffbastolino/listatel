CREATE TABLE colaborador (
     id INT NOT NULL AUTO_INCREMENT,
     nome VARCHAR(30) NOT NULL,
     email VARCHAR(80) NOT NULL,
     PRIMARY KEY (id)
);

---
insert into colaborador(id, nome, email) \
values \
(1,'Felipe Bastos','felipe.bastos@softdesign.com.br'), \
(2,'Thalles Bueno','thalles.bueno@softdesign.com.br'), \
(3,'Andressa Gaspar','andressa.gaspar@softdesign.com.br'), \
(4,'Willian Guimarães','willian.guimaraes@softdesign.com.br'); \
