import type { NextApiRequest, NextApiResponse } from 'next'
import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
    token: process.env.SANITY_API_TOKEN,
});

export default async function createContact(
  req: NextApiRequest,
  res: NextApiResponse
) {
    
    const { name, email, message} = JSON.parse(req.body)
    try{
        await client.create({
            _type:"message",
            name,
            email,
            message,
        })
    }catch(err){
        return res.status(500).json({message: `Couldn't submit message`,err})
    }
    console.log("Message Submmited")
    return res.status(200).json({message: "Message submitted"})
}
