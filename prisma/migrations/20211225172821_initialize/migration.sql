-- CreateTable
CREATE TABLE "Develops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "levelId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "datanascimento" DATETIME NOT NULL,
    "idade" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,
    CONSTRAINT "Develops_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
