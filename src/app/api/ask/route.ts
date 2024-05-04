import openai from "@/lib/openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let { query } = await req.json();

    
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Act as a travel planner and provide answer in a markdown format.",
        },
        { role: "user", content: query },
      ],
      temperature: 0,
      model: "gpt-3.5-turbo",
    });
    return NextResponse.json(completion.choices[0])
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
