"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Bot,
  Sparkles,
  Send,
  X,
  RefreshCw,
  AlertCircle,
  Loader2,
  User,
  ChevronDown,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "Introduce Iqbal",
  "What are his main skills?",
  "Show me his projects",
  "What experience does he have?",
];

const INITIAL_MESSAGE: Message = {
  id: "initial-greeting",
  role: "assistant",
  text: "Hi! 👋 I'm Iqbal's AI Recruiter Assistant, powered directly by his verified portfolio knowledge and Gemini. Feel free to ask about his technical stack, 18 projects, education, or teaching assistant experience!",
};

/**
 * Safely parses and renders markdown tokens without dangerouslySetInnerHTML.
 * Supports bold, italics, inline code, and validated external/internal links.
 */
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const tokenRegex =
    /(\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+|tel:[^\s)]+|\/[^\s)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = tokenRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    const linkText = match[2];
    const linkUrl = match[3];
    const boldText = match[4];
    const italicText = match[5];
    const codeText = match[6];

    if (linkText && linkUrl) {
      nodes.push(
        <a
          key={`link-${match.index}`}
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-400 [html.light_&]:text-emerald-600 underline underline-offset-2 hover:text-emerald-300 [html.light_&]:hover:text-emerald-500 font-medium inline-flex items-center gap-0.5"
        >
          {linkText}
        </a>
      );
    } else if (boldText) {
      nodes.push(
        <strong
          key={`bold-${match.index}`}
          className="font-semibold text-white [html.light_&]:text-slate-900"
        >
          {boldText}
        </strong>
      );
    } else if (italicText) {
      nodes.push(
        <em
          key={`italic-${match.index}`}
          className="italic text-slate-200 [html.light_&]:text-slate-700"
        >
          {italicText}
        </em>
      );
    } else if (codeText) {
      nodes.push(
        <code
          key={`code-${match.index}`}
          className="px-1.5 py-0.5 text-xs rounded bg-slate-800/80 [html.light_&]:bg-slate-200 text-emerald-300 [html.light_&]:text-emerald-700 font-mono"
        >
          {codeText}
        </code>
      );
    } else {
      nodes.push(match[0]);
    }

    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes.length > 0 ? nodes : [text];
}

/**
 * Safe, zero-dependency Markdown renderer for Gemini assistant responses.
 * Parses headers, lists, code fences, and paragraphs without HTML injection.
 */
function SafeMarkdown({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
  let codeBlock: { lines: string[] } | null = null;

  const flushList = () => {
    if (!currentList) return;
    const ListTag = currentList.type;
    const key = `list-${elements.length}`;
    elements.push(
      <ListTag
        key={key}
        className={`my-2 pl-5 space-y-1 ${
          currentList.type === "ul" ? "list-disc" : "list-decimal"
        } text-slate-200 [html.light_&]:text-slate-800 text-xs sm:text-sm`}
      >
        {currentList.items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {renderInline(item)}
          </li>
        ))}
      </ListTag>
    );
    currentList = null;
  };

  const flushCodeBlock = () => {
    if (!codeBlock) return;
    const key = `code-${elements.length}`;
    elements.push(
      <div
        key={key}
        className="my-2 p-2.5 rounded-lg bg-slate-950/90 [html.light_&]:bg-slate-900 border border-white/10 text-xs font-mono overflow-x-auto text-emerald-300"
      >
        <pre>{codeBlock.lines.join("\n")}</pre>
      </div>
    );
    codeBlock = null;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed.startsWith("```")) {
      if (codeBlock) {
        flushCodeBlock();
      } else {
        flushList();
        codeBlock = { lines: [] };
      }
      continue;
    }

    if (codeBlock) {
      codeBlock.lines.push(line);
      continue;
    }

    if (trimmed.length === 0) {
      flushList();
      continue;
    }

    const ulMatch = /^[-*]\s+(.*)$/.exec(trimmed);
    if (ulMatch) {
      if (currentList && currentList.type !== "ul") flushList();
      if (!currentList) currentList = { type: "ul", items: [] };
      currentList.items.push(ulMatch[1]);
      continue;
    }

    const olMatch = /^\d+\.\s+(.*)$/.exec(trimmed);
    if (olMatch) {
      if (currentList && currentList.type !== "ol") flushList();
      if (!currentList) currentList = { type: "ol", items: [] };
      currentList.items.push(olMatch[1]);
      continue;
    }

    flushList();

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h4
          key={`h4-${i}`}
          className="font-semibold text-xs sm:text-sm mt-2.5 mb-1 text-emerald-300 [html.light_&]:text-emerald-700"
        >
          {renderInline(trimmed.slice(4))}
        </h4>
      );
    } else if (trimmed.startsWith("## ")) {
      elements.push(
        <h3
          key={`h3-${i}`}
          className="font-semibold text-sm sm:text-base mt-2.5 mb-1 text-emerald-300 [html.light_&]:text-emerald-700"
        >
          {renderInline(trimmed.slice(3))}
        </h3>
      );
    } else if (trimmed.startsWith("# ")) {
      elements.push(
        <h2
          key={`h2-${i}`}
          className="font-bold text-base mt-2.5 mb-1 text-emerald-300 [html.light_&]:text-emerald-700"
        >
          {renderInline(trimmed.slice(2))}
        </h2>
      );
    } else {
      elements.push(
        <p
          key={`p-${i}`}
          className="my-1 leading-relaxed text-xs sm:text-sm text-slate-200 [html.light_&]:text-slate-800"
        >
          {renderInline(trimmed)}
        </p>
      );
    }
  }

  flushList();
  flushCodeBlock();

  return <div className="space-y-0.5">{elements}</div>;
}

export default function RecruiterAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = (smooth = true) => {
    messagesEndRef.current?.scrollIntoView({
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom(false);
      // Autofocus input on open
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom(true);
  }, [messages, isLoading]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        120
      )}px`;
    }
  };

  const handleReset = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorMessage(null);
    setInput("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleSendMessage = async (customPrompt?: string) => {
    const messageToSend = (customPrompt ?? input).trim();
    if (!messageToSend || isLoading) return;

    const userMessage: Message = {
      id: `user-${messages.length + 1}`,
      role: "user",
      text: messageToSend,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setErrorMessage(null);
    setIsLoading(true);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    // Bounded history: exclude static greeting and keep recent dialogue turns for fast, lightweight context
    const historyPayload = messages
      .filter((m) => m.id !== "initial-greeting" && m.text.trim().length > 0)
      .slice(-6)
      .map((m) => ({
        role: m.role,
        text: m.text.slice(0, 800),
      }));

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messageToSend.slice(0, 1000),
          history: historyPayload,
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const errorText =
          data?.error || `Request failed with status ${res.status}.`;
        throw new Error(errorText);
      }

      const replyText = data?.reply || data?.message;
      if (!replyText) {
        throw new Error("No response received from assistant.");
      }

      const assistantMessage: Message = {
        id: `assistant-${messages.length + 2}`,
        role: "assistant",
        text: replyText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      const errText =
        err instanceof Error
          ? err.message
          : "An error occurred while contacting the assistant. Please try again.";
      setErrorMessage(errText);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Chat Panel */}
      {isOpen && (
        <section
          role="region"
          aria-label="AI Recruiter Assistant Chat"
          className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[410px] md:w-[430px] h-[550px] max-h-[calc(100vh-6.5rem)] flex flex-col rounded-2xl overflow-hidden bg-slate-950/95 [html.light_&]:bg-slate-50/95 backdrop-blur-xl border border-white/15 [html.light_&]:border-slate-300 shadow-2xl shadow-emerald-950/50 [html.light_&]:shadow-slate-400/30 transition-all duration-300 ease-out"
        >
          {/* Header */}
          <div className="px-4 py-3 bg-slate-900/90 [html.light_&]:bg-white/90 border-b border-white/10 [html.light_&]:border-slate-200 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center flex-shrink-0 text-slate-950 shadow-sm">
                <Bot className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white [html.light_&]:text-slate-900 truncate">
                    Iqbal AI Assistant
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                type="button"
                onClick={handleReset}
                disabled={isLoading || messages.length <= 1}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white [html.light_&]:text-slate-500 [html.light_&]:hover:text-slate-900 hover:bg-white/5 [html.light_&]:hover:bg-slate-100 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat panel"
                aria-label="Close chat panel"
                className="p-1.5 rounded-lg text-slate-400 hover:text-white [html.light_&]:text-slate-500 [html.light_&]:hover:text-slate-900 hover:bg-white/5 [html.light_&]:hover:bg-slate-100 transition-colors"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-500/30">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] leading-relaxed ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-sm shadow-sm"
                      : "bg-slate-900/90 [html.light_&]:bg-white text-slate-100 [html.light_&]:text-slate-900 border border-white/10 [html.light_&]:border-slate-200 rounded-tl-sm shadow-sm"
                  }`}
                >
                  {msg.role === "user" ? (
                    <div className="whitespace-pre-wrap break-words">{msg.text}</div>
                  ) : (
                    <SafeMarkdown content={msg.text} />
                  )}
                </div>

                {msg.role === "user" && (
                  <div className="w-6 h-6 rounded-lg bg-slate-800 [html.light_&]:bg-slate-200 text-slate-300 [html.light_&]:text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {/* Quick Suggested Questions (shown on fresh chat) */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-2">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 [html.light_&]:text-slate-500 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-400" /> Suggested Questions
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() => handleSendMessage(question)}
                      className="text-left text-xs px-2.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 [html.light_&]:text-emerald-700 [html.light_&]:border-emerald-300 [html.light_&]:bg-emerald-50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 bg-slate-900/90 [html.light_&]:bg-white border border-white/10 [html.light_&]:border-slate-200 flex items-center gap-2 text-slate-300 [html.light_&]:text-slate-600 text-xs">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-emerald-400" />
                  <span>Thinking...</span>
                </div>
              </div>
            )}

            {/* Error Message Alert */}
            {errorMessage && (
              <div
                role="alert"
                aria-live="assertive"
                className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 [html.light_&]:text-rose-700 flex items-start gap-2.5 text-xs"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-400" />
                <div className="flex-1 leading-relaxed">{errorMessage}</div>
                <button
                  type="button"
                  onClick={() => setErrorMessage(null)}
                  className="text-rose-400 hover:text-rose-200 transition-colors"
                  aria-label="Dismiss error"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input & Controls */}
          <div className="p-3 bg-slate-900/90 [html.light_&]:bg-white/90 border-t border-white/10 [html.light_&]:border-slate-200">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                ref={textareaRef}
                rows={1}
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, experience..."
                aria-label="Ask a question about Iqbal's portfolio"
                disabled={isLoading}
                maxLength={1000}
                className="flex-1 bg-slate-950/80 [html.light_&]:bg-slate-100 border border-white/10 [html.light_&]:border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm text-white [html.light_&]:text-slate-900 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 resize-none transition-all max-h-28 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send message"
                className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-bold transition-all shadow-md shadow-emerald-500/20 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 cursor-pointer"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </form>
            <p className="text-[10px] text-center text-slate-400 [html.light_&]:text-slate-500 mt-1.5">
              Verified portfolio knowledge • Enter to send, Shift+Enter for new line
            </p>
          </div>
        </section>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        title={
          isOpen
            ? "Close AI Recruiter Assistant"
            : "Open AI Recruiter Assistant"
        }
        aria-label={
          isOpen
            ? "Close AI Recruiter Assistant"
            : "Open AI Recruiter Assistant"
        }
        aria-expanded={isOpen}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900/95 [html.light_&]:bg-white/95 border border-emerald-500/40 hover:border-emerald-400 shadow-xl shadow-emerald-950/50 [html.light_&]:shadow-slate-300/80 backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 text-white [html.light_&]:text-slate-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 [html.light_&]:text-emerald-600 transition-transform duration-200" />
        ) : (
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 [html.light_&]:bg-emerald-500 shadow-[0_0_8px_rgba(52,211,153,0.8)] [html.light_&]:shadow-[0_0_8px_rgba(16,185,129,0.7)] flex-shrink-0 motion-safe:animate-pulse"
              aria-hidden="true"
            />
            <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 [html.light_&]:text-emerald-600 group-hover:rotate-12 transition-transform duration-200" />
          </div>
        )}
      </button>
    </div>
  );
}
