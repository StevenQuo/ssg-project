import posts from "@/data/posts.json";
import { generatePostsParams } from "@/lib/params/posts-params";

type Props = {
  params: Promise<{id: string}>;
}

export async function generateStaticParams() {
  return generatePostsParams();
}

export default async function PostPage({ params }: Props) {
  const { id } = await params;
  const post = posts.find(p => p.id === id);

  if (!post) return <h1 className="title">Post not found</h1>;

  return (
    <main className="main-container">
      <div className="mx-8 flex flex-col gap-5">
        <h1 className="title">{post.title}</h1>
        <p className="">{post.content}</p>
        <div>
            <a className="bg-blue-500 hover:bg-blue-700 transition-all duration-300 ease-in-out text-white font-bold py-2 px-4 rounded" href="/posts/">
                Kembali
            </a>
        </div>
      </div>
    </main>
  );
}
