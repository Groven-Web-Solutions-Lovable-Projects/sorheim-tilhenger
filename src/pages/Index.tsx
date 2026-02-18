import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrailerListings from "@/components/TrailerListings";
import Innbytte from "@/components/Innbytte";
import Testimonial from "@/components/Testimonial";
import Kontakt from "@/components/Kontakt";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrailerListings />
      <Innbytte />
      <Testimonial />
      <Kontakt />
    </main>
  );
};

export default Index;
