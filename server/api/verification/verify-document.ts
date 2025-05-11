import OpenAI from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { z } from 'zod';


export default defineEventHandler(async (event) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  
  const body = await readBody(event) as {
    name: string;
    idFront: string;
    idBack: string;
    selfie: string;
  };


  //const { Canvas, Image, ImageData } = canvas
  // faceapi.env.monkeyPatch({ Canvas, Image, ImageData: ImageData as any })
  // await faceapi.nets.faceRecognitionNet.loadFromUri('/models'),


  const BaseResponseSchema = z.object({ 
    status: z.literal("success"),
    data: z.object({
      name: z.string(),
      id_number: z.string(),
      birthdate: z.string(),
      id_type: z.string(),
      id_expiry_date: z.string(),
      id_country: z.string(),
      id_state: z.string(),
      id_city: z.string(),
      id_address: z.string(),
      id_postal_code: z.string(),
      id_issued_date: z.string()
    }),
   });
  const UnsuccessfulResponseSchema = z.object({
    status: z.literal("error"),
    message: z.string(),
   });

  const finalSchema = z.discriminatedUnion('status', [
      BaseResponseSchema,
      UnsuccessfulResponseSchema,
  ]);


  const completion = await openai.responses.parse({
    model: "gpt-4o-2024-08-06",

    input: [
        {
            role: "system",
            content: "You are a document verification assistant. You will receive a name and three images of an ID document. Your task is to extract the information from the ID document and return it in a structured format. If the information cannot be extracted or the ID Document looks invalid or fake, return an error message.",
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
                {
                  type: "input_image",
                  image_url: body.selfie,
                  detail: "auto",
                },
            ],
        },
    ],

    response_format: zodResponseFormat(finalSchema, "final_schema"),
  });

  
  

  return completion;
})
