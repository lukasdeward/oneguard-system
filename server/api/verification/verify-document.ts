import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from 'zod';


export default defineEventHandler(async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  
  const body = await readBody(event) as {
    name: string;
    idFront: string;
    idBack: string;
    face: string;
  };

  const CalendarEvent = z.object({
    id_type: z.string(),
    name: z.string(),
    birthday: z.string(),
    expiry_date: z.string(),
    country: z.string(),
    IDNumber: z.string(),
    address: z.string(),
  });

  const completion = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",

    input: [
        {
            role: "system",
            content: "You are a Age Verification assistant. You will receive a name, two images of a ID document (Passport, National ID Card, etc.), a Face of the Holder and the name of the holder. Your task is to extract the Information from the ID document and return it. If the information cannot be extracted or the ID Document looks invalid / fake, return an error message.",
        },
        {
            role: "user",
            content: [
                { type: "input_text", text: "Name: " + body.name },
                {
                    type: "input_image",
                    image_url: body.idFront,
                    detail: "auto",
                },
                {
                  type: "input_image",
                  image_url: body.idBack,
                  detail: "auto",
                },
            ],
        },
    ],
    text: {
      format: zodTextFormat(CalendarEvent, 'id_card_response'),
    }
  });

  return completion;
})
