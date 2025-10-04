import AboutPage from "./about/page";
import ProductsPage from "./products/page";
import HeroSection from "@/ui/sections/HeroSection";
import TestimonialsSection from "@/ui/sections/TestimonialsSection";
import FAQSection from "@/ui/sections/FAQSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutPage />
      <TestimonialsSection />
      <ProductsPage />
      <FAQSection />
    </section>
  );
}
