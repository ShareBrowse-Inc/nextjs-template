import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/hooks/useLocale";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { locale, t } = useLocale();

  const changeTo = locale === "en" ? "ja" : "en";

  return (
    <main className="flex justify-center">
      <Link href="/" locale={changeTo}>
        <button>{t.common.change_locale}</button>
      </Link>

      <h1 className="">{t.common.title}</h1>

      <p className="">{t.common.description}</p>

      <p className="">Cloud Run already Deploy</p>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </main>
  );
};

export default Home;
