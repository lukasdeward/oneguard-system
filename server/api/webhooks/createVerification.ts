import { PrismaClient } from "@prisma/client";
import { createVerificationWebhook } from "../types/webhookTypes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as createVerificationWebhook;
  console.log('Received order:', body);
  const prisma = new PrismaClient();

  // This webhook is called by the shopify app when a new order is created. Its job is to check if the customer has been verified
  // and if not, create a new verification request. The verification request will be sent to the customer via email.

  const shop = await prisma.merchants.findFirst({
    where: {
      shop: body.shop,
    }
  });

  if (!shop) {
    return {
      success: false,
      message: 'Shop not found',
    }
  }

  await prisma.ongoing_verifications.create({
    data: {
      name: body.name,
      shop: body.shop,
      email: body.email,
      address: body.address,
      order_id: body.order_id,
      order_value: body.order_value,
      order_timestamp: body.order_timestamp,
    }
  });

  return {
      success: true,
      message: 'Verification Created successfully',
  }
});
