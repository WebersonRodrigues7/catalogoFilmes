-- CreateTable
CREATE TABLE "Filmes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_lancamento" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "horario" INTEGER NOT NULL
);
