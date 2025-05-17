import { PrismaClient } from "@prisma/client";
import { OngoingVerificationResponse } from "~~/types/api";

export default defineEventHandler(async (event) => {

  const { id } = getQuery(event);

  if (!id ) {
    return {
      success: false,
      message: 'Verification ID is required',
    } as OngoingVerificationResponse;
  }


  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (typeof id !== "string" || !uuidRegex.test(id)) {
    return {
      success: false,
      message: 'Verification ID has invalid format',
    } as OngoingVerificationResponse;
  }

  const prisma = new PrismaClient();

  const verifications = await prisma.ongoing_verifications.findFirst({
    where: {
      id: id as string,
    },
    select: {
      id: true,
      customer_name: true,
      order_name: true,
      order_timestamp: true,
      merchants: {
        select: {
          shop: true,
          display_name: true,
          necessary_age: true,
          face_scan: true,
        }
      },
      created_at: true,
    }
  })

  if (!verifications) {
    return {
      success: false,
      message: 'Verification not found',
    } as OngoingVerificationResponse;
  }

  

  return {
    success: true,
    data: {
      displayName: verifications.merchants.display_name,
      faceScan: verifications.merchants.face_scan,
      necessaryAge: verifications.merchants.necessary_age,
      customerName: verifications.customer_name,
      orderName: verifications.order_name,
      orderTimestamp: verifications.order_timestamp,
    },
  } as OngoingVerificationResponse;
})
