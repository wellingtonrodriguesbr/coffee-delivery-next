import { Coffees } from "@/components/Coffees";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-bg-cover w-full h-full min-h-screen">
        <div className="container">
          <Hero />
          <Coffees />
        </div>
      </main>
    </>
  );
}
