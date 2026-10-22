import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { recruiterKnowledge } from "@/lib/recruiter-knowledge";

interface HistoryItemInput {
  role?: unknown;
  content?: unknown;
  text?: unknown;
}

interface ChatRequestBody {
  message?: unknown;
  history?: unknown;
}

const MAX_MESSAGE_LENGTH = 1000;
const MAX_HISTORY_MESSAGES = 10;

const SYSTEM_INSTRUCTION = `You are the AI Recruiter and Portfolio Assistant for Md. Iqbal Hossain.
Your role is to assist recruiters, hiring managers, and prospective clients by providing clear, accurate, and professional information about Iqbal's background, technical skills, projects, qualifications, credentials, and contact details.

VERIFIED PORTFOLIO KNOWLEDGE BASE:
${JSON.stringify(recruiterKnowledge)}

STRICT OPERATIONAL & TRUTHFULNESS GUIDELINES:
1. TRUTHFULNESS & GROUNDING: Rely strictly and solely on the verified portfolio knowledge base provided above. NEVER invent, fabricate, assume, or extrapolate skills, work experience, achievements, metrics, degrees, grades, credentials, or project details.
2. MISSING OR UNVERIFIED INFORMATION: If asked about any detail not explicitly verified in the knowledge base above (e.g., salary expectations, exact physical street address, project completion dates not listed, or unlisted technologies), clearly and politely state that this information is not available in the portfolio records, and invite the user to reach out to Iqbal directly.
3. CONCISE & DIRECT ANSWERS: Deliver brief, direct, and well-structured responses (typically 2-4 sentences or compact bullet points). Avoid conversational filler, lengthy preambles, or unprompted summaries.
4. CONTACT INFORMATION: When asked how to contact Iqbal, share his verified contact details:
   - Email: ${recruiterKnowledge.candidate.contacts.email}
   - LinkedIn: ${recruiterKnowledge.candidate.contacts.linkedinUrl}
   - GitHub: ${recruiterKnowledge.candidate.contacts.githubUrl}
   - WhatsApp: ${recruiterKnowledge.candidate.contacts.whatsapp}
5. PROJECTS: When answering inquiries about projects, highlight the key technologies and provide relevant links (live demo or GitHub repo) from the knowledge base when appropriate.`;

export async function POST(request: NextRequest) {
  // 1. Parse and validate JSON body
  let body: ChatRequestBody;
  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON in request body." },
      { status: 400 }
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Request body must be a JSON object." },
      { status: 400 }
    );
  }

  // 2. Validate current message
  const { message, history } = body;

  if (typeof message !== "string") {
    return NextResponse.json(
      { error: "Field 'message' is required and must be a string." },
      { status: 400 }
    );
  }

  const trimmedMessage = message.trim();
  if (trimmedMessage.length === 0) {
    return NextResponse.json(
      { error: "Message cannot be empty." },
      { status: 400 }
    );
  }

  if (trimmedMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    );
  }

  // 3. Validate optional conversation history
  const contents: Array<{ role: "user" | "model"; parts: Array<{ text: string }> }> = [];

  if (history !== undefined) {
    if (!Array.isArray(history)) {
      return NextResponse.json(
        { error: "Field 'history', if provided, must be an array." },
        { status: 400 }
      );
    }

    if (history.length > MAX_HISTORY_MESSAGES) {
      return NextResponse.json(
        { error: `History exceeds maximum allowed limit of ${MAX_HISTORY_MESSAGES} messages.` },
        { status: 400 }
      );
    }

    // Keep only the most recent dialogue turns for prompt speed and lower latency
    const recentHistory = history.slice(-6);

    for (let i = 0; i < recentHistory.length; i++) {
      const item = recentHistory[i] as HistoryItemInput;
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return NextResponse.json(
          { error: `History item at index ${i} must be an object.` },
          { status: 400 }
        );
      }

      const role = item.role;
      if (role !== "user" && role !== "model" && role !== "assistant") {
        return NextResponse.json(
          { error: `Invalid role at history index ${i}. Allowed roles are 'user', 'model', or 'assistant'.` },
          { status: 400 }
        );
      }

      const rawText =
        typeof item.text === "string"
          ? item.text
          : typeof item.content === "string"
          ? item.content
          : null;

      if (rawText === null) {
        return NextResponse.json(
          { error: `History item at index ${i} must contain a 'text' or 'content' string.` },
          { status: 400 }
        );
      }

      const trimmedText = rawText.trim();
      if (trimmedText.length === 0) {
        return NextResponse.json(
          { error: `History item at index ${i} cannot be empty.` },
          { status: 400 }
        );
      }

      if (trimmedText.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          { error: `History item at index ${i} exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.` },
          { status: 400 }
        );
      }

      contents.push({
        role: role === "assistant" ? "model" : role,
        parts: [{ text: trimmedText }],
      });
    }
  }

  // Append user's latest prompt
  contents.push({
    role: "user",
    parts: [{ text: trimmedMessage }],
  });

  // 4. Verify API key configuration on server
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key is not configured on the server." },
      { status: 500 }
    );
  }

  // 5. Generate reply with Gemini SDK using low thinking overhead for fast latency
  const modelName = process.env.GEMINI_MODEL || "gemini-3.6-flash";

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: modelName,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
      },
    });

    const reply = response.text?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "No response was generated by the assistant." },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply, message: reply });
  } catch (error) {
    console.error(
      "Gemini API chat error:",
      error instanceof Error ? error.message : "Unknown error"
    );
    return NextResponse.json(
      { error: "An error occurred while communicating with the AI service. Please try again later." },
      { status: 502 }
    );
  }
}
