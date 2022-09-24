import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { useTranslation } from "next-i18next";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import { usePageView } from "@/hooks/usePageView";
import { GA_TRACKING_ID } from "@/lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("common");
  usePageView();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:locale" content={t("locale")} />
        <meta property="og:locale:alternate" content={t("alt_locale")} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#faa603" />
        <meta name="theme-color" content="#faa603" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {GA_TRACKING_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <DefaultSeo
        titleTemplate={`%s | ${t("title")}`}
        title={undefined}
        defaultTitle={t("title")}
        description={t("description")}
        canonical={t("url")}
        twitter={{
          handle: t("twitter"),
          //site: t.TWITTER,
          cardType: "summary_large_image",
        }}
        facebook={{
          appId: t("facebook"),
        }}
        openGraph={{
          url: t("url"),
          type: "website",
          title: t("title"),
          description: t("description"),
          images: [
            {
              url: "/ogp.png",
              width: 839,
              height: 440,
              alt: "ShareBrowse",
            },
          ],
          locale: t("locale"),
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
