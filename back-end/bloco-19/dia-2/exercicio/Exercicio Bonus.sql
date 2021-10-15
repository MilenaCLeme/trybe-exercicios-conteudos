SELECT * FROM PiecesProviders.Provides;
SELECT * FROM PiecesProviders.Pieces;
SELECT * FROM PiecesProviders.Providers;

SELECT Price, Piece, Provider  FROM PiecesProviders.Provides WHERE Provider = 'RBT';
SELECT * FROM PiecesProviders.Provides order by Price DESC limit 5;
SELECT * FROM PiecesProviders.Provides order by Price DESC limit 4 offset 3;
SELECT Price, Piece, Provider  FROM PiecesProviders.Provides WHERE Provider = 'HAL' order by Price DESC;
SELECT Price, Piece, Provider  FROM PiecesProviders.Provides WHERE Piece = 1;

