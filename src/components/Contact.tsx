"use client";

import React, { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string; // Honeypot field for bot protection
}

interface SubmissionStatus {
  state: "idle" | "submitting" | "success" | "error";
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  botcheck: "",
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<SubmissionStatus>({
    state: "idle",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required.";
    } else if (formData.subject.trim().length < 2) {
      errors.subject = "Subject must be at least 2 characters.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }

    // Reset general status if user starts modifying after an error
    if (status.state === "error") {
      setStatus({ state: "idle", message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({
        state: "error",
        message: "Please fill in all required fields correctly.",
      });
      return;
    }

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      process.env.WEB3FORMS_ACCESS_KEY ||
      "";

    if (!accessKey) {
      setStatus({
        state: "error",
        message:
          "Form submission key is not configured. Please ensure NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is set in your environment variables.",
      });
      return;
    }

    setStatus({ state: "submitting", message: "" });

    try {
      const payload: Record<string, string> = {
        access_key: accessKey,
        subject: formData.subject.trim(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        replyto: formData.email.trim(),
        from_name: "Md. Iqbal Hossain Portfolio",
        Subject: formData.subject.trim(), // Explicitly included in the email body details table
        message: formData.message.trim(),
      };

      if (formData.botcheck) {
        payload.botcheck = formData.botcheck;
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      interface Web3FormsResult {
        success: boolean;
        message?: string;
      }

      const data = (await response.json().catch(() => null)) as Web3FormsResult | null;

      if (response.ok && data?.success) {
        setStatus({
          state: "success",
          message: data.message || "Thank you! Your message has been sent successfully.",
        });
        // Reset form ONLY on confirmed success
        setFormData(initialFormData);
        setFieldErrors({});
      } else {
        setStatus({
          state: "error",
          message:
            data?.message ||
            "Failed to send your message. Please verify your details or try again later.",
        });
      }
    } catch {
      setStatus({
        state: "error",
        message: "Network error occurred. Please check your connection and try again.",
      });
    }
  };

  return (
    <section className="py-20 md:py-24 px-6 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        {/* Section Header: Clean Hierarchy with Eyebrow and Single Prominent Heading */}
        <div className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 [html.light_&]:text-emerald-700 border border-emerald-500/20 mb-3 tracking-wide uppercase">
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              aria-hidden="true"
            />
            Contact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white [html.light_&]:text-slate-900">
            Get in Touch
          </h2>
        </div>

        {/* Responsive Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Refined Introduction & Compact Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white [html.light_&]:text-slate-900 mb-2.5">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 [html.light_&]:text-slate-600 text-sm leading-relaxed">
                Have a project in mind or an opportunity to discuss? I&apos;d love to hear from you. Let&apos;s build something meaningful together.
              </p>
            </div>

            {/* Compact, Consistent Contact Cards */}
            <div className="space-y-3 pt-1">
              {/* Email Card */}
              <a
                href="mailto:iqbalhossain6615@gmail.com"
                aria-label="Send an email to iqbalhossain6615@gmail.com"
                className="glass-card p-3.5 sm:p-4 rounded-xl border border-white/10 [html.light_&]:border-slate-200/90 transition-all duration-200 hover:border-emerald-500/40 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between gap-3 group motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform duration-200 shrink-0 motion-reduce:transform-none">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-500">
                      Email
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-white [html.light_&]:text-slate-800 truncate">
                      iqbalhossain6615@gmail.com
                    </span>
                  </div>
                </div>
                <div className="text-xs font-medium text-emerald-400 group-hover:text-emerald-300 flex items-center gap-1 shrink-0">
                  <span className="hidden sm:inline">Write me</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/md-iqbalhossain-bd/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Md Iqbal Hossain's LinkedIn profile (opens in new tab)"
                className="glass-card p-3.5 sm:p-4 rounded-xl border border-white/10 [html.light_&]:border-slate-200/90 transition-all duration-200 hover:border-blue-500/40 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between gap-3 group motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-200 shrink-0 motion-reduce:transform-none">
                    <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-500">
                      LinkedIn
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-white [html.light_&]:text-slate-800 truncate">
                      md-iqbalhossain-bd
                    </span>
                  </div>
                </div>
                <div className="text-xs font-medium text-blue-400 group-hover:text-blue-300 flex items-center gap-1 shrink-0">
                  <span className="hidden sm:inline">Connect</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/8801853264661"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with +8801853264661 (opens in new tab)"
                className="glass-card p-3.5 sm:p-4 rounded-xl border border-white/10 [html.light_&]:border-slate-200/90 transition-all duration-200 hover:border-green-500/40 hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between gap-3 group motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-105 transition-transform duration-200 shrink-0 motion-reduce:transform-none">
                    <FaWhatsapp className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-500">
                      WhatsApp
                    </span>
                    <span className="block text-xs sm:text-sm font-medium text-white [html.light_&]:text-slate-800 truncate">
                      +8801853264661
                    </span>
                  </div>
                </div>
                <div className="text-xs font-medium text-green-400 group-hover:text-green-300 flex items-center gap-1 shrink-0">
                  <span className="hidden sm:inline">Chat</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-7 md:p-8 rounded-2xl border border-white/10 [html.light_&]:border-slate-200/90 shadow-lg">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Status Messages */}
                {status.state === "success" && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 [html.light_&]:text-emerald-700 flex items-start gap-2.5 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-400" />
                    <div className="text-xs sm:text-sm leading-relaxed">{status.message}</div>
                  </div>
                )}

                {status.state === "error" && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 [html.light_&]:text-rose-700 flex items-start gap-2.5 transition-all duration-200"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                    <div className="text-xs sm:text-sm leading-relaxed">{status.message}</div>
                  </div>
                )}

                {/* Honeypot Field - Hidden for Spam Prevention */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botcheck">Do not fill this field</label>
                  <input
                    id="botcheck"
                    name="botcheck"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botcheck}
                    onChange={handleChange}
                  />
                </div>

                {/* Row 1: Name and Email side by side on desktop, stacked on mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 1. Name Field (Required) */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-600 mb-1.5"
                    >
                      Name <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      disabled={status.state === "submitting"}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full bg-slate-900/50 [html.light_&]:bg-white/80 border rounded-xl px-3.5 py-2.5 text-sm text-white [html.light_&]:text-slate-900 placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.name
                          ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                          : "border-white/10 [html.light_&]:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                      }`}
                    />
                    {fieldErrors.name && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.name}
                      </p>
                    )}
                  </div>

                  {/* 2. Email Field (Required; Valid Email Format) */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-600 mb-1.5"
                    >
                      Email <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      disabled={status.state === "submitting"}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full bg-slate-900/50 [html.light_&]:bg-white/80 border rounded-xl px-3.5 py-2.5 text-sm text-white [html.light_&]:text-slate-900 placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                        fieldErrors.email
                          ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                          : "border-white/10 [html.light_&]:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* 3. Subject Field (Required) */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-600 mb-1.5"
                  >
                    Subject <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    autoComplete="off"
                    disabled={status.state === "submitting"}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={`w-full bg-slate-900/50 [html.light_&]:bg-white/80 border rounded-xl px-3.5 py-2.5 text-sm text-white [html.light_&]:text-slate-900 placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 disabled:opacity-60 disabled:cursor-not-allowed ${
                      fieldErrors.subject
                        ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                        : "border-white/10 [html.light_&]:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.subject}
                    </p>
                  )}
                </div>

                {/* 4. Message Field (Required; Multiline Textarea) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-wider text-gray-400 [html.light_&]:text-slate-600 mb-1.5"
                  >
                    Message <span className="text-rose-400" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    autoComplete="off"
                    disabled={status.state === "submitting"}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, idea, or inquiry..."
                    className={`w-full bg-slate-900/50 [html.light_&]:bg-white/80 border rounded-xl px-3.5 py-2.5 text-sm text-white [html.light_&]:text-slate-900 placeholder:text-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 resize-y min-h-[110px] disabled:opacity-60 disabled:cursor-not-allowed ${
                      fieldErrors.message
                        ? "border-rose-500/60 focus:ring-rose-500/30 focus:border-rose-500"
                        : "border-white/10 [html.light_&]:border-slate-300 focus:border-emerald-500 focus:ring-emerald-500/30"
                    }`}
                  ></textarea>
                  {fieldErrors.message && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* 5. Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={status.state === "submitting"}
                    aria-busy={status.state === "submitting"}
                    className="w-full sm:w-auto px-7 py-3 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    {status.state === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" aria-hidden="true" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send
                          className="w-4 h-4 text-emerald-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
