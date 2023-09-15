import Navbar from "@/components/Navbar";
import FeaturedMovies from "@/components/Featured/FeaturedMovies";
import Footer from "@/components/Footer";
import Hero from "@/components/heroMain/Hero";

export default function Home() {
  return (
    <main className="max-container bg-white">
      <section>
        <Navbar />
      </section>
      <section className="wide:sm:pb-24 pb-12">
        <Hero />
      </section>
      <section className="sm:px-[10rem] px-8 sm:py-5 py-4 ">
        <FeaturedMovies />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
}
