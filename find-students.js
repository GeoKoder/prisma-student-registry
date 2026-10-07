const { PrismaClient } = require("./src/generated");

const prisma = new PrismaClient();

async function main() {
    // All Students 
    const allStudents = await prisma.student.findMany();
    // console.log("All students:", allStudents);


    // Students from a specific town 
    const nairobiStudents = await prisma.student.findMany({
        where: { town: 'Nairobi' },
    });
    console.log("Nairobi students:", nairobiStudents);
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })