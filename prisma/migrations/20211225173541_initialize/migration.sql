/*
  Warnings:

  - You are about to drop the column `datanascimento` on the `Develops` table. All the data in the column will be lost.
  - You are about to drop the column `idade` on the `Develops` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Develops` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Develops` table. All the data in the column will be lost.
  - Added the required column `age` to the `Develops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `Develops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Develops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sex` to the `Develops` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Develops" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "levelId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL,
    "age" INTEGER NOT NULL,
    "hobby" TEXT NOT NULL,
    CONSTRAINT "Develops_levelId_fkey" FOREIGN KEY ("levelId") REFERENCES "Levels" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Develops" ("hobby", "id", "levelId") SELECT "hobby", "id", "levelId" FROM "Develops";
DROP TABLE "Develops";
ALTER TABLE "new_Develops" RENAME TO "Develops";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
