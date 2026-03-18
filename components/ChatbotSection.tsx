"use client";

import { useState } from "react";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTED_PROMPTS = [
  "I live in an apartment, what pet is best for me?",
  "I have kids, what kind of dog should I adopt?",
  "I want a calm cat.",
  "I work long hours and need pets that handle alone time well."
];

export function ChatbotSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi, I’m your PetPalace assistant. Tell me about your home, routine, and what you’re hoping for in a pet. I’ll help you narrow it down."
    }
  ]);
  const [input, setInput] = useState("");

  async function handleSend(prompt?: string) {
    const text = prompt ?? input.trim();
    if (!text) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({
            role,
            content
          }))
        })
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data?.reply ??
          "I could not generate a reply this time. Please try again."
      };

      setMessages((current) => [...current, assistantMessage]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          id: Date.now() + 2,
          role: "assistant",
          content: "There was a network problem. Please try again in a moment."
        }
      ]);
    }
  }

  return (
    <section
      id="chat"
      className="fade-in mx-auto mt-20 max-w-6xl rounded-3xl bg-white/90 px-4 py-8 shadow-soft ring-1 ring-slate-100 sm:px-8 lg:px-10"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <div className="flex-1 space-y-3">
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            A gentle assistant to guide your choice
          </h2>
          <p className="text-sm text-slate-600">
            Share a few details about your lifestyle, space, and experience with
            pets. The PetPalace assistant is designed to help you choose a pet
            that fits quietly and comfortably into your life.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => handleSend(prompt)}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] text-slate-600 transition hover:border-accent/60 hover:bg-white hover:text-slate-900"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 w-full rounded-2xl bg-slate-50/80 p-3 sm:p-4 lg:mt-0 lg:max-w-md">
          <div className="flex flex-col gap-2 rounded-2xl bg-white/90 p-3 text-xs shadow-inner sm:p-4">
            <div className="mb-1 max-h-64 space-y-2 overflow-y-auto pr-1">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                      message.role === "user"
                        ? "bg-slate-900 text-white"
                        : "bg-slate-50 text-slate-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything about finding the right pet…"
                className="flex-1 bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={() => handleSend()}
                className="rounded-full bg-slate-900 px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-slate-800 disabled:opacity-40"
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>

            <p className="px-1 pt-1 text-[10px] text-slate-400">
              Answers are generated by the PetPalace assistant using your
              message and general guidance about pet adoption.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

