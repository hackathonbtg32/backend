/*
  Warnings:

  - You are about to alter the column `totalValue` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to alter the column `availableBrokerValue` on the `Broker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Double`.
  - You are about to drop the column `paymentDate` on the `Debits` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Debits` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Debits` table. All the data in the column will be lost.
  - Added the required column `paymentData` to the `Debits` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentValue` to the `Debits` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Account` MODIFY `totalValue` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Broker` MODIFY `availableBrokerValue` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `Debits` DROP COLUMN `paymentDate`,
    DROP COLUMN `status`,
    DROP COLUMN `value`,
    ADD COLUMN `paymentData` JSON NOT NULL,
    ADD COLUMN `paymentValue` DOUBLE NOT NULL;
