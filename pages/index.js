import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Continuum Block | Continuously learning new skills</title>
        <meta
          name="description"
          content="Continuum Block | Continuously learning new skills"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
