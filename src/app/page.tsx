import AboutPage from "./about/page";
import ProductsPage from "./products/page";
import HeroSection from "@/ui/components/HeroSection"
import TestimonialsSection from "@/ui/components/TestimonialsSection";
import FAQSection from "@/ui/components/FAQSection";

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
