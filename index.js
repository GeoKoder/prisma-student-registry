const { PrismaClient } = require("./src/generated");

const prisma = new PrismaClient();

async function  main() {
    // Adds 5 students with Kenyan names and towns
    const students = await prisma.student.createMany({
        data: [
            {
                name: 'Simon',
                email: 'simon@mail.com',
                age: 25,
                town: 'Nairobi',
                course: 'Computer Science',
            },
            {
                name: 'Jason',
                email: 'jason@mail.com',
                age: 21,
                town: 'Kiambu',
                course: 'Software Engineering',
            },
            {
                name: 'Peter',
                email: 'peter@mail.com',
                age: 19,
                town: 'Kisumu',
                course: 'Information Technology',
            },
            {
                name: 'Kevin',
                email: 'kevin@mail.com',
                age: 22,
                town: 'Laikipia',
                course: 'Business Information Technology',
            },
            {
                name: 'Paul',
                email: 'paul@mail.com',
                age: 23,
                town: 'Kajiado',
                course: 'Cybersecurity',
            },
        ],
    });

    console.log("Created", students.count, "students");
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })