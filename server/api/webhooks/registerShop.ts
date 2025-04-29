
export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    console.log('Received webhook:', body);
    return {
        connectionCreated: true,
        message: 'Webhook registered successfully',
    }
});
