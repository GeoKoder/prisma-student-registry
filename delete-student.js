const { PrismaClient } = require("./src/generated");

const prisma = new PrismaClient();

async function main() {
    const deleted = await prisma.student.delete({
        where: { id: 4 },
    });

    console.log("Deleted Student: ", deleted.name);

    const remaining = await prisma.student.findMany({
        select: {id: true, name: true },
    });
    console.log('\nRemaining students:');
  remaining.forEach((s) => console.log(`  ${s.id}. ${s.name}`));
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })