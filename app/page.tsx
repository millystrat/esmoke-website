import { AgeGate } from "@/components/age-gate";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Products } from "@/components/products";
import { Reviews } from "@/components/reviews";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <AgeGate />
      <Nav />
      <main className="pt-16">
        <Hero />
        <Products />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </>
  );
}
