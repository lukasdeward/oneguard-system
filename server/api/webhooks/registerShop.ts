import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('Received webhook:', body);
    const prisma = new PrismaClient();

    const register = await prisma.merchants.upsert({
        where: {
            shop: body.shop,
        },
        update: {
            key: body.access_token,
            public_proxy: body.public_proxy,
        },
        create: {
            shop: body.shop,
            key: body.access_token,
            public_proxy: body.public_proxy,
        },
    });

    if (!register) {
        return {
            connectionCreated: false,
            message: 'A error occurred while registering the Shop',
        }
    }

    return {
        connectionCreated: true,
        message: 'Shop registered successfully',
    }
});
