const { PrismaClient } = require("./src/generated");

const prisma = new PrismaClient();

async function main() {
    const updated = await prisma.student.update({
        where: { id: 2 },
        data: {
            town: 'Nairobi',
            course: 'Computer Science',
        },
    });

    console.log("Updated Student: ", updated.name);
    console.log("Updated Student Town: ", updated.town);
    console.log("Updated Student Course: ", updated.course);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })