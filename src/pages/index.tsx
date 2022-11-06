import { useLocale } from "@/hooks/useLocale";

import type { NextPage } from "next";

const Home: NextPage = () => {
  const { t } = useLocale();

  return (
    <main className="py-48 flex justify-center items-center border-red-400 border-2">
      <h1 className="text-2xl">{t.common.title}</h1>
    </main>
  );
};

export default Home;
