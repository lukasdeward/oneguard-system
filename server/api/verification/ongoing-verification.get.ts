import { PrismaClient } from "@prisma/client";

export default defineEventHandler(async (event) => {

  const { id } = getQuery(event);


  if (!id ) {
    return {
      success: false,
      message: 'Verification ID is required',
    }
  }

  if (typeof id === "string" && (/^-|-$/.test(id))) {
    return {
      success: false,
      message: 'Verification ID has invalid format',
    }
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
    }
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
  }
})
