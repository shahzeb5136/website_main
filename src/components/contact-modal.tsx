"use client";

import React, { useEffect, useRef, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject?: string;
}

type Status = "idle" | "sending" | "success" | "error";

export default function ContactModal({ isOpen, onClose, subject = "Enquiry" }: ContactModalProps) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const overlayRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Focus first input when opened */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/xkokapaj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, phone, message, subject }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleReset = () => { setStatus("idle"); };

  if (!isOpen) return null;

  return (
    <>
      {/* ── Overlay ── */}
      <div
        ref={overlayRef}
        onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px",
          animation: "cmFadeIn .15s ease",
        }}
      >
        {/* ── Panel ── */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cm-title"
          style={{
            background: "var(--bg, #fff)",
            border: "1px solid var(--rule, #e5e5e5)",
            width: "100%", maxWidth: 520,
            padding: "40px 40px 36px",
            position: "relative",
            animation: "cmSlideUp .2s ease",
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              position: "absolute", top: 16, right: 16,
              background: "none", border: "none", cursor: "pointer",
              color: "var(--muted, #888)", fontSize: 22, lineHeight: 1,
              padding: "4px 8px",
              transition: "color .15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--fg, #111)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted, #888)")}
          >
            ×
          </button>

          {status === "success" ? (
            /* ── Success state ── */
            <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
              <div
                id="cm-title"
                className="serif"
                style={{ fontSize: 28, letterSpacing: "-0.02em", marginBottom: 12 }}
              >
                Message sent
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6, marginBottom: 28 }}>
                Thank you — I&apos;ll be in touch shortly.
              </p>
              <button
                onClick={() => { handleReset(); onClose(); }}
                className="btn-primary"
                style={{ cursor: "pointer" }}
              >
                Close
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <>
              <div className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 10 }}>
                Get in touch
              </div>
              <h2
                id="cm-title"
                className="serif"
                style={{ fontSize: 30, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 28 }}
              >
                Arrange an introduction
              </h2>

              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="cm-email"
                      className="mono"
                      style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}
                    >
                      Email *
                    </label>
                    <input
                      id="cm-email"
                      ref={inputRef}
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, inputBlurStyle)}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="cm-phone"
                      className="mono"
                      style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}
                    >
                      Phone *
                    </label>
                    <input
                      id="cm-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+971 55 000 0000"
                      style={inputStyle}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, inputBlurStyle)}
                    />
                  </div>

                  {/* Optional message */}
                  <div>
                    <label
                      htmlFor="cm-message"
                      className="mono"
                      style={{ fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)", display: "block", marginBottom: 6 }}
                    >
                      Brief note <span style={{ fontWeight: 400, opacity: 0.7 }}>(optional)</span>
                    </label>
                    <textarea
                      id="cm-message"
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="What would you like to discuss?"
                      style={{ ...inputStyle, resize: "vertical", minHeight: 72 }}
                      onFocus={e => Object.assign(e.currentTarget.style, inputFocusStyle)}
                      onBlur={e => Object.assign(e.currentTarget.style, inputBlurStyle)}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#c0392b", marginTop: 12 }}>
                    Something went wrong. Please try again or email{" "}
                    <a href="mailto:y.shahzeb@gmail.com" style={{ color: "inherit" }}>y.shahzeb@gmail.com</a> directly.
                  </p>
                )}

                <div style={{ display: "flex", gap: 10, marginTop: 24, alignItems: "center" }}>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary"
                    style={{ cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}
                  >
                    {status === "sending" ? "Sending…" : "Send message →"}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-ghost"
                    style={{ cursor: "pointer" }}
                  >
                    Cancel
                  </button>
                </div>

                <p style={{ fontSize: 11, color: "var(--muted)", marginTop: 16, lineHeight: 1.5 }}>
                  Your details are sent directly to Shahzeb and are not shared with third parties.
                </p>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ── Keyframe animations injected once ── */}
      <style>{`
        @keyframes cmFadeIn  { from { opacity: 0 } to { opacity: 1 } }
        @keyframes cmSlideUp { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
    </>
  );
}

/* ── Input base style ── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  fontSize: 14,
  fontFamily: "inherit",
  background: "var(--soft, #f5f5f3)",
  border: "1px solid var(--rule, #e5e5e5)",
  color: "var(--fg, #111)",
  outline: "none",
  transition: "border-color .15s",
  boxSizing: "border-box",
};

const inputFocusStyle: React.CSSProperties = {
  borderColor: "var(--fg, #111)",
  background: "var(--bg, #fff)",
};

const inputBlurStyle: React.CSSProperties = {
  borderColor: "var(--rule, #e5e5e5)",
  background: "var(--soft, #f5f5f3)",
};
