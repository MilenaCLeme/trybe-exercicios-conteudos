-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books;
SELECT Id, Title FROM hotel.Books as b
WHERE NOT EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id 
);

-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.
SELECT * FROM hotel.Books_Lent;
SELECT * FROM hotel.Books;
SELECT Id, title FROM hotel.Books as b
WHERE EXISTS (
	SELECT * FROM hotel.Books_Lent
    WHERE b.Id = book_id AND b.Title Like '%lost%'
);

-- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
SELECT * FROM hotel.CarSales;
SELECT * FROM hotel.Customers;

SELECT `Name` FROM hotel.Customers as c
WHERE NOT EXISTS (
	SELECT * FROM hotel.CarSales
    WHERE c.CustomerID = CustomerID
);

-- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM hotel.Cars;
SELECT * FROM hotel.Customers;
SELECT * FROM hotel.CarSales;
SELECT cu.`Name`, ca.`Name` FROM hotel.Customers AS cu
INNER JOIN hotel.Cars as ca
WHERE EXISTS (
	SELECT * FROM hotel.CarSales 
    WHERE ca.Id = CarID AND cu.CustomerId = CustomerID 
);