// 参考：https://zenn.dev/sasigume/articles/937a11c655b15c#2.-prefix-(%E5%85%A8%E9%83%A8%E6%8E%A5%E9%A0%AD%E8%BE%9E)

import { NextRequest, NextResponse } from "next/server";
import acceptLanguageParser from "accept-language-parser";

/**
 * 選択肢の中から言語を選ぶ
 * @param localeHeader Accept-Languageヘッダの値
 * @returns 言語だけのコード
 */
function selectLanguage(localeHeader: string | null) {
  // 選択肢
  const languages = ["en", "ja"];
  const detectedLang = acceptLanguageParser.pick(languages, localeHeader ?? "en-US", {
    loose: true,
  });
  // いずれも該当しない場合はenを選ぶ
  return detectedLang ?? languages[0];
}

/**
 * どんな言語でも接頭辞を付ける
 * @param request
 * @see https://nextjs.org/docs/advanced-features/i18n-routing#prefixing-the-default-locale 参考
 * @see next.config.js で「default」をデフォルトロケールにしている
 * @returns
 */
export function middleware(request: NextRequest) {
  const { pathname, locale, search } = request.nextUrl;

  // ファイルは除外
  const PUBLIC_FILE = /\.(.*)$/;

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) && !pathname.includes("/api/") && locale === "default";

  const language = selectLanguage(request.headers.get("accept-language"));

  return shouldHandleLocale ? NextResponse.redirect(`/${language}${pathname}${search}`) : undefined;
}
