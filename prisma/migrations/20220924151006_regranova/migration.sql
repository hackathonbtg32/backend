/*
  Warnings:

  - You are about to drop the column `cpfCnpj` on the `Client` table. All the data in the column will be lost.
  - Added the required column `cnpj` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `cpfCnpj`,
    ADD COLUMN `cnpj` VARCHAR(191) NOT NULL,
    ADD COLUMN `cpf` VARCHAR(191) NOT NULL;
