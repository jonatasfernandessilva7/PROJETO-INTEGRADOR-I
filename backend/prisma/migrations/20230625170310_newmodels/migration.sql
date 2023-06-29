/*
  Warnings:

  - You are about to drop the `Administradores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Alunos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Computadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Laboratorios` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Monitores` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Computadores" DROP CONSTRAINT "Computadores_emailAluno_fkey";

-- DropForeignKey
ALTER TABLE "Laboratorios" DROP CONSTRAINT "Laboratorios_emailAluno_fkey";

-- DropForeignKey
ALTER TABLE "Laboratorios" DROP CONSTRAINT "Laboratorios_emailMonitor_fkey";

-- DropTable
DROP TABLE "Administradores";

-- DropTable
DROP TABLE "Alunos";

-- DropTable
DROP TABLE "Computadores";

-- DropTable
DROP TABLE "Laboratorios";

-- DropTable
DROP TABLE "Monitores";

-- CreateTable
CREATE TABLE "alunos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "alunos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "monitores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "monitores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "administradores" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "administradores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "computadores" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'livre',
    "numero" INTEGER NOT NULL,
    "emailAluno" TEXT NOT NULL,

    CONSTRAINT "computadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratorios" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'aberto',
    "numero" INTEGER NOT NULL,
    "emailAluno" TEXT NOT NULL,
    "emailMonitor" TEXT NOT NULL,

    CONSTRAINT "laboratorios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alunos_email_key" ON "alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "monitores_email_key" ON "monitores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administradores_email_key" ON "administradores"("email");

-- AddForeignKey
ALTER TABLE "computadores" ADD CONSTRAINT "computadores_emailAluno_fkey" FOREIGN KEY ("emailAluno") REFERENCES "alunos"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratorios" ADD CONSTRAINT "laboratorios_emailAluno_fkey" FOREIGN KEY ("emailAluno") REFERENCES "alunos"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratorios" ADD CONSTRAINT "laboratorios_emailMonitor_fkey" FOREIGN KEY ("emailMonitor") REFERENCES "monitores"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
