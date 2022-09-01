import en from "public/locales/en";
import ja from "public/locales/ja";
import { useRouter } from "next/router";

export const useLocale = () => {
  const { locale } = useRouter();

  const t = locale === "en" ? en : ja;

  return { locale, t };
};
