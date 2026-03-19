"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { FormInput } from "@/components/FormInput";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");

    setTimeout(() => {
      setStatus("sent");
    }, 700);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="fade-in">
        <SectionHeader
          eyebrow="Contact"
          title="Send a message"
          subtitle="We read every note. This form is ready for backend wiring later."
        />

        <div className="mt-8 rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-100 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-5">
            {status === "sent" ? (
              <div className="rounded-3xl bg-slate-50 p-6 text-center">
                <div className="text-accent">♥</div>
                <h2 className="mt-3 text-lg font-semibold text-slate-900">
                  Message received
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Thank you for reaching out. We will respond soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-5 rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <FormInput
                  label="Name"
                  name="name"
                  value={name}
                  onChange={setName}
                  placeholder="Your name"
                />

                <FormInput
                  label="Email"
                  name="email"
                  value={email}
                  onChange={setEmail}
                  placeholder="you@example.com"
                  type="email"
                />

                <FormInput
                  label="Message"
                  name="message"
                  value={message}
                  onChange={setMessage}
                  placeholder="Tell us what you need."
                  textarea
                  rows={5}
                />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-slate-500">
                    No backend wired yet. This is a friendly UI placeholder.
                  </p>

                  <button
                    type="submit"
                    disabled={
                      status !== "idle" ||
                      !name.trim() ||
                      !email.trim() ||
                      !message.trim()
                    }
                    className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800 disabled:opacity-40"
                  >
                    {status === "sending" ? "Sending" : "Send message"}
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

