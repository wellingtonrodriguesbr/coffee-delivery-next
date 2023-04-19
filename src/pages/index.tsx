import { Coffees } from "@/components/Coffees";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Delivery | Porto Alegre</title>
      </Head>
      <Header />
      <div className="">
        <main className="container">
          <Hero />
          <Coffees />
        </main>
      </div>
    </>
  );
}
