import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useLocale } from "@/hooks/useLocale";
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:locale" content={t.LOCALE} />
        <meta property="og:locale:alternate" content={t.ALT_LOCALE} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#faa603" />
        <meta name="theme-color" content="#faa603" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${t.TITLE}`}
        title={undefined}
        defaultTitle={t.TITLE}
        description={t.DESCRIPTION}
        canonical={t.URL}
        twitter={{
          handle: t.TWITTER,
          //site: t.TWITTER,
          cardType: "summary_large_image",
        }}
        facebook={{
          appId: t.FACEBOOK,
        }}
        openGraph={{
          url: t.URL,
          type: "website",
          title: t.TITLE,
          description: t.DESCRIPTION,
          images: [
            {
              url: "/ogp.png",
              width: 839,
              height: 440,
              alt: "ShareBrowse",
            },
          ],
          locale: t.LOCALE,
        }}
      />
      <Component {...pageProps} {...t} />
    </>
  );
}

export default MyApp;
