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
        <link
          href="https://experiment.liveblocks.sharebrowse.tech/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <meta name="description" content="みんなでワイワイ🙌" />
        <meta property="og:url" content="https://experiment.liveblocks.sharebrowse.tech" />
        <meta property="og:title" content="ShareBrowse" />
        <meta property="og:site_name" content="ShareBrowse" />
        <meta
          property="og:description"
          content="ShareBrowseは、チームメンバと同じコンテンツを見ている際に自動的にマウスカーソルを共有し、雑談の起点を創出します。"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://experiment.liveblocks.sharebrowse.tech/ogp.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
