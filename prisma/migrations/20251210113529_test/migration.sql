-- CreateTable
CREATE TABLE "Test" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'Test',

    CONSTRAINT "Test_pkey" PRIMARY KEY ("id")
);
