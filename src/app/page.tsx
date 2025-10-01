import AboutPage from "./about/page";
import PostsPage from "./posts/page";
import ProductsPage from "./products/page";
import HeroSection from "@/ui/components/HeroSection"
import TestimonialsSection from "@/ui/components/TestimonialsSection";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutPage />
      <TestimonialsSection />
      <ProductsPage />
      <PostsPage />
    </section>
  );
}
