import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "example.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Continuity of Care — A Human-First AI Workspace",
    description: "Carry accurate context, current priorities, and professional values across AI tools with a free, plain-Markdown practice library.",
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      title: "Continuity of Care",
      description: "Your context should follow you—not disappear with every AI session.",
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: "Continuity of Care — a human-first AI workspace" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Continuity of Care",
      description: "A human-first AI workspace in plain Markdown.",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
