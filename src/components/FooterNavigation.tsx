import Image from "next/image";
import Link from "next/link";

import { useLocale } from "@/hooks/useLocale";
import WhiteLogo from "public/sharebrowse-logo-white.svg";

const FooterNavigation = () => {
  const { t } = useLocale();

  return (
    <footer className="bg-gray-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="https://corp.sharebrowse.tech">
              <Image
                src={WhiteLogo}
                alt="ShareBrowse,Inc."
                width={214}
                height={60}
              />
            </Link>
            <p className="text-sm text-white">{t.common.description}</p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 xl:mt-0">
                <h3 className="text-base font-medium text-white">Language</h3>
                <div className="mt-4 flex flex-col space-y-4 text-gray-300 hover:text-white">
                  <Link href="/" locale="en">
                    <button className="text-left">{t.common.english}</button>
                  </Link>
                  <Link href="/" locale="ja">
                    <button className="text-left">{t.common.japanese}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2022 ShareBrowse, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNavigation;
