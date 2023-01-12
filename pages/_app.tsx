import { DM_Sans, Space_Grotesk } from "@next/font/google";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/components/Header";

const dmsans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-DM-Sans",
  weight: ["400", "500", "700"],
});
const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-Space-Grotesk",
  weight: ["700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --spacegrotesk-font: ${spacegrotesk.style.fontFamily};
          --dmsans-font: ${dmsans.style.fontFamily};
        }
      `}</style>
      <main className="min-h-screen bg-custom mix-blend-color bg-opacity-78">
        <section className="w-11/12 sm:w-10/12 mx-auto max-w-7xl pt-8 opacity-100">
          <Header />
          <Component {...pageProps} />
        </section>
      </main>
      <footer className="fixed py-4 bottom-0 right-0 left-0 bg-custom">
        <div className="flex justify-center text-grey_02">
          <span className="mx-4">FAQ</span>
          <span className="mx-4">Exx Website</span>
          <span className="mx-4">Terms & Conditions</span>
          <span className="mx-4">Help</span>
        </div>
      </footer>
    </>
  );
}
