import Image from "next/image";
import Link from "next/link";
import posts from "@/data/posts.json";

interface Post {
  slug: string;
  title: string;
  date: string;
  imgUrl: string;
}

export default function PostsSlider() {
  return (
    <section className="w-full py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Latest Posts
        </h2>
        
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PostCard({post} : {post: Post}) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link 
      href={`/posts/${post.slug}`} 
      className="block w-72 flex-shrink-0"
    >
      <div className="group overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
        <div className="relative h-40 w-full">
          <Image
            src={post.imgUrl}
            alt={`Image for ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4">
          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
          <h3 className="font-bold text-gray-900 line-clamp-2 dark:text-white">
            {post.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}