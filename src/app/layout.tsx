import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Md. Iqbal Hossain | Full Stack Developer Portfolio",
  description: "Portfolio of Md. Iqbal Hossain, a Full Stack Developer passionate about building beautiful and functional web experiences.",
  icons: {
    icon: [
      { url: "/images/my_favicon.png", type: "image/png" },
    ],
    shortcut: "/images/my_favicon.png",
    apple: "/images/my_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider>
          <CustomCursor />
          <LoadingScreen />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
