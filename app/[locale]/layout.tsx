import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  getMessages,
  setRequestLocale,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
import { locales } from "@/i18n";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "RichardBoyz",
  description: "Richard Lee personal information",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale}>
        <body className={inter.className}>{children}</body>
      </html>
    </NextIntlClientProvider>
  );
}
