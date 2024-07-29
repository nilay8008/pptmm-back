/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Todo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "pptmmsbackendstatus" AS ENUM ('DONE', 'ACTIVE');

-- DropForeignKey
ALTER TABLE "Todo" DROP CONSTRAINT "Todo_userEmail_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "token" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "Todo";

-- DropEnum
DROP TYPE "TodoStatus";

-- CreateTable
CREATE TABLE "pptmmsbackend" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "description" TEXT,
    "status" "pptmmsbackendstatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userEmail" TEXT,

    CONSTRAINT "pptmmsbackend_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "pptmmsbackend_userEmail_idx" ON "pptmmsbackend"("userEmail");

-- AddForeignKey
ALTER TABLE "pptmmsbackend" ADD CONSTRAINT "pptmmsbackend_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE SET NULL ON UPDATE CASCADE;
