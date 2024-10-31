import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const ball1 = await prisma.ball.create({
    data: {
      type: 'Soccer',
      description: 'Official soccer ball',
      price: 19.99,
      stock: 100
    }
  });

  const ball2 = await prisma.ball.create({
    data: {
      type: 'Basketball',
      description: 'Standard basketball',
      price: 29.99,
      stock: 50
    }
  });

  // Inserta más bolas si es necesario

  console.log('Balls seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
