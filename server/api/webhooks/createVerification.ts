import { PrismaClient } from "@prisma/client";
import { createVerificationWebhook } from "../types/webhookTypes";
import { sha256 } from "js-sha256";

export default defineEventHandler(async (event) => {
  const body = await readBody(event) as createVerificationWebhook;
  const prisma = new PrismaClient();

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

  const existingVerification = await prisma.verifyed_customers.findFirst({
    where: {
      address_hash: sha256(body.address),
    }
  })

  if (existingVerification) {
    return {
      success: true,
      message: 'Customer already verified',
    }
  }

  await prisma.ongoing_verifications.create({
    data: {
      customer_name: body.name,
      shop: body.shop,
      customer_email: body.email,
      address_hash: sha256(body.address),
      order_id: body.order_id,
      order_name: body.order_id,
      order_timestamp: body.order_timestamp,
    }
  });

  return {
      success: true,
      message: 'Verification Created successfully',
  }
});
