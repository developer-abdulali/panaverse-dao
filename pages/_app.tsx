import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Head from "next/head"
import Navbar from "@/components/Navbar/Navbar"
export default function App({ Component, pageProps }: AppProps) {
  return (

    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Your page description goes here" />
        <title>Panaverse Dao</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
  
}
