import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const post1 = await prisma.article.upsert({
        where: { title: 'Prisma Adds Support for Mongodb' },
        update: {},
        create: {
            title: 'Prisma Adds Support for Mongodb',
            body: 'support vsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            description: 'descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
            published: false,
        },
    });
    const post2 = await prisma.article.upsert({
        where: { title: "What's new in Prisma? (Q1/22)" },
        update: {},
        create: {
            title: "What's new in Prisma? (Q1/22)",
            body: 'support vsssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            description: 'descriptionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',
            published: true,
        },
    });
    console.log({ post1, post2 })
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);

    }).finally(async () => {
        await prisma.$disconnect();
    })