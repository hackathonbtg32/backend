/*
  Warnings:

  - Added the required column `status` to the `Broker` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Broker` ADD COLUMN `status` INTEGER NOT NULL;
