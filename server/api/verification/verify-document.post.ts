import { PrismaClient } from "@prisma/client";
import { verifyDocuments } from "~~/server/helper/ai-verification";

export default defineEventHandler(async (event) => {

  type VerificationResponse = {
    success: true;
    verified_customer_id: string;
  } | {
    success: true;
    message: string;
  }


  const body = await readBody(event) as {
    verification_id: string;
    idFront: string;
    idBack: string;
    face: string;
  };
  const prisma = new PrismaClient();

  const completion = await verifyDocuments(body.idFront, body.idBack, body.face)

  const verification = await prisma.ongoing_verifications.findFirst({
    where: {
      id: body.verification_id,
    }
  });

  // Validate completion result
  if (!completion || !completion.output || completion.output.length === 0 || !verification) {
    return {
      success: false,
      message: 'Verification failed',
    }
  }

  // @ts-ignore
  const idCard = completion.output[0].content[0].parsed as {
      verification_success: boolean,
      verification_certainty: number,
      id_type: string;
      name: string;
      birthday: string;
      expiry_date: string;
      country: string;
      IDNumber: string;
      address: string;
  }

  if (!idCard ) {
    return {
      success: false,
      message: 'Verification failed',
    }
  }

  if (!idCard.verification_success) {
    return {
      success: false,
      message: 'ID verification failed',
    }
  }

  if (verification.customer_name !== idCard.name) {
    return {
      success: false,
      message: 'Name on ID does not match the customer name',
    }
  }

  await prisma.ongoing_verifications.update({
    where: {
      id: body.verification_id,
    },
    data: {
      done: true,
    }
  });

  const verifiedCustomer = await prisma.verifyed_customers.create({
    data: {
      email: verification.customer_email,
      address_hash: verification.address_hash,
      birthday: new Date(idCard.birthday),
      card_id: idCard.IDNumber,
    }
  });


  return {
    success: true,
    verified_customer_id: verifiedCustomer.id,
  } as VerificationResponse;
})
