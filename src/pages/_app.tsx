import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { useTranslation } from "next-i18next";
import { appWithTranslation } from "next-i18next";
import { DefaultSeo } from "next-seo";

import { GTM_ID } from "@/lib/gtm";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("common");

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

      {GTM_ID && (
        <Script
          id="gtag-base"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', '${GTM_ID}');
          `,
          }}
        />
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
              url: t("ogp"),
              width: 839,
              height: 440,
              alt: t("title"),
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
