import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { useLocale } from "@/hooks/useLocale";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{t.TITLE}</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t.DESCRIPTION} />

        <meta property="og:url" content={t.URL} />
        <meta property="og:title" content={t.TITLE} />
        <meta property="og:site_name" content={t.TITLE} />
        <meta property="og:description" content={t.DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:locale" content={t.LOCALE} />
        <meta property="og:locale:alternate" content={t.ALT_LOCALE} />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#faa603" />
        <meta name="theme-color" content="#faa603" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={t.TWITTER} />
        <meta property="fb:app_id" content={t.FACEBOOK} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Component {...pageProps} {...t} />
    </>
  );
}

export default MyApp;
