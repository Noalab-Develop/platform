"use client";

import { useEffect, useState } from "react";

interface ModalStrings {
  title: string;
  description: string;
  toLabel: string;
  subjectLabel: string;
  bodyLabel: string;
  copyButton: string;
  copiedButton: string;
  openButton: string;
  closeButton: string;
}

interface Props {
  email: string;
  subject: string;
  body: string;
  buttonLabel: string;
  strings: ModalStrings;
}

export function ContactButton({ email, subject, body, buttonLabel, strings }: Props) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  async function handleCopy() {
    const text = `${strings.toLabel}: ${email}\n${strings.subjectLabel}: ${subject}\n\n${body}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (permissions/insecure context) — user can still select the text manually.
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b1f38] p-6 text-left shadow-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3
                id="contact-modal-title"
                className="font-[var(--font-sora)] text-xl font-semibold text-white"
              >
                {strings.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={strings.closeButton}
                className="shrink-0 rounded-full p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
              >
                ✕
              </button>
            </div>
            <p className="mt-2 text-sm text-gray-400">{strings.description}</p>

            <div className="mt-6 space-y-4 rounded-xl border border-white/10 bg-[#071220] p-4 text-sm">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-blue-400">
                  {strings.toLabel}
                </span>
                <span className="text-gray-200">{email}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-blue-400">
                  {strings.subjectLabel}
                </span>
                <span className="text-gray-200">{subject}</span>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-wide text-blue-400">
                  {strings.bodyLabel}
                </span>
                <p className="whitespace-pre-wrap text-gray-300">{body}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 rounded-full border border-blue-500/40 bg-blue-600/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
              >
                {copied ? strings.copiedButton : strings.copyButton}
              </button>
              <a
                href={mailtoHref}
                className="flex-1 rounded-full bg-blue-600 px-5 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
              >
                {strings.openButton}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
