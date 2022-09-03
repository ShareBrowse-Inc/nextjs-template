import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { LocaleProps } from "@/types/locale";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation, Trans } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home = (contents: LocaleProps) => {
  const router = useRouter();
  const { locale, locales, defaultLocale } = router;
  const { t } = useTranslation("common");

  const changeTo = router.locale === "en" ? "ja" : "en";

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Index page</h1>
        <p>Current locale: {locale}</p>
        <p>Default locale: {defaultLocale}</p>
        <p>Configured locales: {JSON.stringify(locales)}</p>

        <Link href="/" locale={changeTo}>
          <button>{t("change-locale", { changeTo })}</button>
        </Link>

        <h1 className={styles.title}>{t("title")}</h1>

        <p className={styles.description}>{t("description")}</p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

//export const getStaticProps = async ({ locale }: { locale: string }) => ({
export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
