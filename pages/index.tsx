import Head from "next/head";
import LandingPage from "./LandingPage";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Cryptools</title>
        <meta name="description" content="Cryptools converted to Next.js" />
      </Head>

      <LandingPage />
    </>
  );
}
