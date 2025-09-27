import posts from "@/data/posts.json";
import { generatePostsParams } from "@/lib/params/posts-params";
import Image from "next/image";

type Props = {
  params: Promise<{slug: string}>;
}

export async function generateStaticParams() {
  return generatePostsParams();
}

export default async function PostPage({ params }: Props) {

  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);

  if (!post) return <h1 className="title">Post not found</h1>;

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

  return (
    <article className="mx-auto w-full max-w-3xl bg-white px-4 py-8 dark:bg-gray-900 sm:px-6 sm:py-12 lg:px-8">
			<header className="mb-8 text-center">
				<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
					{post.title}
				</h1>
				<p className="text-base text-gray-500 dark:text-gray-400">
					Published on {formattedDate}
				</p>
			</header>

			<figure className="my-8">
				<Image
					src={post.imgUrl}
					alt={`Cover image for ${post.title}`}
					width={1200}
					height={675}
					className="h-auto w-full rounded-lg object-cover shadow-lg"
					priority
				/>
			</figure>
			<div className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
				<p>{post.content}</p>
			</div>
		</article>
  );
}
