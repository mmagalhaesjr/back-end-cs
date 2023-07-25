/*
  Warnings:

  - You are about to drop the column `student_id` on the `tokens` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `tokens` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "fk_student";

-- AlterTable
ALTER TABLE "tokens" DROP COLUMN "student_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "tokens" ADD CONSTRAINT "fk_student" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
