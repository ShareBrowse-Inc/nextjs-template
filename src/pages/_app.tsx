import "@/styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

import { DefaultSeo } from "next-seo";

import FooterNavigation from "@/components/FooterNavigation";
import { useLocale } from "@/hooks/useLocale";
import { GTM_ID } from "@/lib/gtm";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useLocale();

  return (
    <>
      <DefaultSeo
        titleTemplate={`%s | ${t.common.title}`}
        title={undefined}
        defaultTitle={t.common.title}
        description={t.common.description}
        canonical={t.common.url}
        twitter={{
          //handle: t.common.twitter,
          //site: t.TWITTER,
          cardType: "summary_large_image",
        }}
        //facebook={{
        //    appId: t.common.facebook,
        //}}
        openGraph={{
          url: t.common.url,
          type: "website",
          title: t.common.title,
          description: t.common.description,
          images: [
            {
              url: t.common.ogp,
              width: 839,
              height: 440,
              alt: t.common.title,
            },
          ],
          locale: t.common.locale,
        }}
      />
      <Head>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:locale" content={t.common.locale} />
        <meta property="og:locale:alternate" content={t.common.alt_locale} />
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

      <Component {...pageProps} />
      <FooterNavigation />
    </>
  );
}

export default MyApp;
