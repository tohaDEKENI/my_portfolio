import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";


export const metadata: Metadata = {
  title: "Toha DEKENI – Portfolio Développeur Web",
  description: "Portfolio en ligne de Toha DEKENI. Découvrez mes projets web, mes compétences en développement frontend et backend, et contactez-moi pour vos projets.",
  keywords: ["Portfolio", "Développeur Web", "React", "Next.js", "Node.js", "Projets", "Toha DEKENI"],
  authors: [{ name: "Toha DEKENI", url: "https://github.com/tohaDEKENI" }],
  openGraph: {
    title: "Toha DEKENI – Portfolio Développeur Web",
    description: "Découvrez mes projets web et compétences en développement frontend et backend.",
    url: "https://ton-domaine.com",
    siteName: "Toha DEKENI Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Toha DEKENI",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableColorScheme
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

