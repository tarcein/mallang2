import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const base = new URL(`${protocol}://${host}`);
  return {
    metadataBase: base,
    title: "사이버 말랑이",
    description: "누르고, 늘리고, 키우는 귀여운 3D 사이버 말랑이",
    openGraph: { title: "사이버 말랑이", description: "누르고, 늘리고, 키우는 귀여운 3D 사이버 말랑이", images: [new URL("/og.png", base).toString()] },
    twitter: { card: "summary_large_image", images: [new URL("/og.png", base).toString()] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
