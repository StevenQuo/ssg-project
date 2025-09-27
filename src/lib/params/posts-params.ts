import posts from "@/data/posts.json";

export async function generatePostsParams(){
    return posts.map(post => ({ slug: post.slug }));
}