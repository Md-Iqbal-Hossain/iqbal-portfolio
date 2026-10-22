# Iqbal Hossain — Full Stack Developer Portfolio

A modern, responsive developer portfolio built with Next.js, featuring interactive animations, project showcases, professional credentials, and an AI-powered Recruiter Assistant.

## 🌐 Live Portfolio

[Visit My Portfolio](https://iqbal-portfolio-one.vercel.app/)

## ✨ Features

- **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- **Modern UI** — Dark theme, glassmorphism, emerald accents, and interactive visual effects.
- **Interactive Animations** — GSAP-powered scroll animations and a subtle interactive spider-web background.
- **Custom Cursor** — A minimal custom cursor with interactive hover effects.
- **Projects Showcase** — Featured projects, additional projects, technology stacks, live demos, and pagination.
- **AI Recruiter Assistant** — A Gemini-powered chatbot that answers questions about my background, skills, experience, projects, and credentials using verified portfolio information.
- **Contact Form** — Contact functionality powered by Web3Forms.
- **Professional Credentials** — Access to relevant academic, training, and professional certificates.
- **SEO-Friendly Structure** — Built with Next.js App Router.

## 🛠️ Tech Stack

**Frontend**
- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP

**Backend & AI**
- Next.js Route Handlers
- Google Gemini API
- Web3Forms

**Tools & Deployment**
- Git & GitHub
- Vercel
- ESLint

## 🚀 Getting Started

### Prerequisites

- Node.js (a version compatible with the project's Next.js dependencies)
- npm
- A Google AI Studio API key for the AI Recruiter Assistant

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Md-Iqbal-Hossain/iqbal-portfolio.git
   ```

2. Navigate to the project directory:

   ```bash
   cd iqbal-portfolio
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the project root and configure the environment variables:

   ```env
   GEMINI_API_KEY=your_gemini_api_key
   GEMINI_MODEL=gemini-3.6-flash
   ```

   Replace the placeholder with your own Google AI Studio API key. Never commit your real API key to GitHub.

   Configure any additional environment variables required by your contact form or other integrations.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🤖 AI Recruiter Assistant

The portfolio includes an AI-powered assistant that helps recruiters and visitors learn about my professional background.

It can answer questions about:
- Technical skills and technologies
- Education and professional experience
- Projects and their technology stacks
- Certificates and credentials
- Contact information

The assistant uses the Google Gemini API through a server-side API route. The API key is stored in an environment variable and is not exposed in client-side code.

## 📂 Project Structure

```text
src/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
└── lib/
    └── recruiter-knowledge.ts
public/
├── images/
└── documents/
```

*This is a simplified overview of the main project directories.*

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint checks |

## 🚀 Deployment

The portfolio is deployed on Vercel.

To deploy your own version:

1. Import the GitHub repository into Vercel.
2. Configure the required environment variables in your Vercel project settings.
3. Deploy the application.
4. Verify the live portfolio, AI assistant, and contact form.

## 👨‍💻 Author

**Md. Iqbal Hossain**

BSc in Computer Science and Engineering — University of Liberal Arts Bangladesh (ULAB)

- **Portfolio:** [iqbal-portfolio-one.vercel.app](https://iqbal-portfolio-one.vercel.app/)
- **GitHub:** [Md-Iqbal-Hossain](https://github.com/Md-Iqbal-Hossain)
- **LinkedIn:** [md-iqbalhossain-bd](https://www.linkedin.com/in/md-iqbalhossain-bd/)

---

⭐ If you find this project interesting, feel free to explore the repository and connect with me.