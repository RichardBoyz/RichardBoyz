import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "zh-TW"];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`/messages/${locale}.json`)).default,
  };
});