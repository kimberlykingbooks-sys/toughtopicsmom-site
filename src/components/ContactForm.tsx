"use client";

import { useForm, ValidationError } from "@formspree/react";

const eventTypes = ["Keynote", "Workshop", "Panel", "Other"];

const FORMSPREE_FORM_ID = "xgogppkv";

export default function ContactForm({
  showEventType = false,
}: {
  showEventType?: boolean;
}) {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  if (state.succeeded) {
    return (
      <p className="rounded-2xl border border-gray-200 bg-white p-6 text-center text-gray-600 shadow-sm">
        Thanks for reaching out — Kimberly will follow up soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-accent" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-accent" />
      </div>

      {showEventType && (
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
            Event Type
          </label>
          <select
            id="eventType"
            name="eventType"
            className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
          >
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 transition-shadow focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-light"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-accent" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="rounded-lg bg-accent px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:bg-accent-dark hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
      >
        {state.submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
