import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js Template</title>
        <meta name="robots" content="noindex" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="我々は「オンラインコミュニケーションの可能性をハックする」をミッションに掲げ、オンラインコミュニケーションの可能性をあらゆるテクノロジーとアイデアでハックし、世界中の人々に愛されるプロダクトをつくります。"
        />
        <meta property="og:url" content="https://experiment.liveblocks.sharebrowse.tech" />
        <meta property="og:title" content="ShareBrowse,Inc." />
        <meta property="og:site_name" content="ShareBrowse,Inc." />
        <meta
          property="og:description"
          content="我々は「オンラインコミュニケーションの可能性をハックする」をミッションに掲げ、オンラインコミュニケーションの可能性をあらゆるテクノロジーとアイデアでハックし、世界中の人々に愛されるプロダクトをつくります。"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://experiment.liveblocks.sharebrowse.tech/ogp.png"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#faa603" />
        <meta name="theme-color" content="#faa603" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
