-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "fullname" VARCHAR(100) NOT NULL,
    "email" VARCHAR(150) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);
