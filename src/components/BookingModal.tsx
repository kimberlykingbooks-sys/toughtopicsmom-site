"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

// Set NEXT_PUBLIC_CALENDLY_URL to the Calendly event link, e.g.
// https://calendly.com/your-name/consultation
// Availability (which days/times, how many per week, buffers) is managed in Calendly.
export const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

// Used until a Calendly link is configured, so the button never dead-ends.
export const FALLBACK_BOOKING_URL = "/contact";

export default function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose]);

  const embedUrl = CALENDLY_URL
    ? `${CALENDLY_URL}${CALENDLY_URL.includes("?") ? "&" : "?"}hide_gdpr_banner=1&embed_type=Inline&embed_domain=${
        typeof window !== "undefined" ? window.location.host : ""
      }`
    : "";

  if (!mounted) return null;

  // Portal to <body> so the header's backdrop-blur doesn't trap the fixed overlay.
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book a consultation"
            className="relative flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-xl"
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 12 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-brand-light px-5 py-3">
              <h2 className="text-lg font-semibold text-brand-dark">
                Book a Consultation
              </h2>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="rounded-md p-1 text-2xl leading-none text-gray-500 hover:text-brand-dark"
              >
                ×
              </button>
            </div>
            <iframe
              src={embedUrl}
              title="Schedule a consultation"
              className="h-full w-full flex-1 border-0"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
