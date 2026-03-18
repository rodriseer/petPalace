import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const incomingMessages = (body?.messages ?? []) as {
      role: "user" | "assistant";
      content: string;
    }[];

    const systemMessage = {
      role: "system" as const,
      content:
        "You are a warm, calm assistant for a pet adoption startup called PetPalace. " +
        "Help people choose pets that fit their home, schedule, experience, and preferences. " +
        "Explain your reasoning in simple, clear language and avoid overwhelming users. " +
        "If you are not sure, say so and suggest what else they could think about."
    };

    const messages = [systemMessage, ...incomingMessages.map((message) => ({
      role: message.role,
      content: message.content
    }))];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      temperature: 0.7,
      max_tokens: 350
    });

    const reply = completion.choices[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error", error);
    return NextResponse.json(
      { error: "Something went wrong, please try again." },
      { status: 500 }
    );
  }
}

