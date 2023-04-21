import Head from "next/head";
import { Header } from "@/components/Header";
import { FormOrderComplete } from "@/components/checkout/FormOrderComplete";
import { CoffeesSelected } from "@/components/checkout/CoffeesSelected";

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout | Coffee Delivery</title>
      </Head>
      <Header />

      <form className="container flex gap-8 justify-between">
        <FormOrderComplete />
        <CoffeesSelected />
      </form>
    </>
  );
}
