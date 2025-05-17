import OpenAI from "openai";
import { zodTextFormat } from "openai/helpers/zod";
import { z } from 'zod';


export const verifyDocuments = async (idFront: string, idBack: string, face: string) => {

    const INPUT_TEXT = "You are an Age Verification Assistant. You will be given: 1. Two images of an identity document (passport, national ID card or driver’s license), 2. One portrait photo of the document holder. Your job is to: 1: Detect whether the document is genuine and legible, 2: OCR all required fields, 3: Compare the portrait on the document to the supplied face image. If the document is not genuine or the face does not match, return a verification_success of false. Also compute a certainty score betweeen 0 and 100.";

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const CalendarEvent = z.object({
        verification_success: z.boolean(),
        verification_certainty: z.number(),
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
                content: INPUT_TEXT,
            },
            {
                role: "user",
                content: [
                    {
                        type: "input_image",
                        image_url: idFront,
                        detail: "auto",
                    },
                    {
                        type: "input_image",
                        image_url: idBack,
                        detail: "auto",
                    },
                    {
                        type: "input_image",
                        image_url: face,
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
}