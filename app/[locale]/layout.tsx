import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RichardBoyz",
  description: "Richard Lee personal information",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
