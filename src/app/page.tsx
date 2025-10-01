import PostsPage from "./posts/page";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <section>
      <ProductsPage />
      <PostsPage />
    </section>
  );
}
