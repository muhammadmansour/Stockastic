-- CreateTable
CREATE TABLE "mans" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',
    "registration_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "quota" INTEGER NOT NULL DEFAULT 2,
    "status" TEXT NOT NULL DEFAULT 'inactive',

    CONSTRAINT "mans_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mans_email_key" ON "mans"("email");
