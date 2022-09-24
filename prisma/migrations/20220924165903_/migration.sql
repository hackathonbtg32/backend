/*
  Warnings:

  - You are about to drop the column `cnpj` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `cpf` on the `Client` table. All the data in the column will be lost.
  - Added the required column `cnpjcpf` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Client` DROP COLUMN `cnpj`,
    DROP COLUMN `cpf`,
    ADD COLUMN `cnpjcpf` VARCHAR(191) NOT NULL;
