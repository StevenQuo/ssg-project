import PostsPage from "./posts/page";
import ProductsPage from "./products/page";
import HeroSection from "@/ui/components/HeroSection"

export default function Home() {
  return (
    <section>
      <HeroSection />
      <ProductsPage />
      <PostsPage />
    </section>
  );
}
