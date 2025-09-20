import posts from "@/data/posts.json";
import Link from "next/link";

export default function PostsPage() {
  return (
    <main className="main-container">
      <div className="">
        <h1 className="title">All Posts</h1>
        <ul>
        {posts.map(post => (
            <li className="m-8 text-2xl font-medium text-violet-900 inline-block transition-all duration-300 ease-in-out hover:text-sky-500 hover:-translate-y-1" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
        ))}
        </ul>
      </div>
    </main>
  );
}
