
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log('Received order:', body);
  return {
      success: true,
      message: 'Order received successfully',
  }
});
