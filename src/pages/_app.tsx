import "@/styles/globals.css";
import "@/styles/hanko-style.css";
import "@/styles/hanko-starter-style.css";
import type { AppProps } from "next/app";



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> ;
}
