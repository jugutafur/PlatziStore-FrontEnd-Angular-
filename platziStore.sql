--This Database is create in SqlServer name=platziStore

CREATE TABLE product(
id INT IDENTITY ,
title NVARCHAR(20) NOT NULL,
image NVARCHAR(40) NOT NULL,
price INT NOT NULL,
description NVARCHAR(100) NOT NULL,
CONSTRAINT id PRIMARY KEY (id)
)

-- table productos
INSERT INTO product (title, image, price, description) VALUES 
('Televisor', 'assets/images/televisor.png',2,'descripcion de televisor')
('Cama', 'assets/images/cama.png', 3, 'descricion de cama'),
('Computador', 'assets/images/computador.png', 4, 'descripcion de computador')

