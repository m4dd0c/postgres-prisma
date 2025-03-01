-- CreateTable
CREATE TABLE "Todo" (
    "title" TEXT NOT NULL,
    "desc" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "u_id" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
