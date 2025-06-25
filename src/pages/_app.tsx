import { FloatingContactButtons } from "@/components/home/floating-contact-buttons";
import { Footer } from "@/layout/footer";
import { Header } from "@/layout/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <FloatingContactButtons />
      <Footer />
    </>
  );
}
