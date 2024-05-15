import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

// Font files can be colocated inside of `pages`
const myFont = localFont({
  src: [
    {
      path: "../../public/assets/fonts/League.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/League-ThinInline.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/League-Inline.otf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "MOI-City",
  description:
    "Explore the virtual world of UAE's Ministry of Interior services through an immersive gaming experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
