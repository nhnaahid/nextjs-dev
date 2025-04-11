import { getPosts } from "@/services/postApi";
import Link from "next/link";

const PostPage = async () => {
    const posts = await getPosts();
    console.log(posts);
    return (
        <div className="grid grid-cols-4 gap-3">
            {
                posts.slice(0, 30).map(post => <div key={post?.id} className="border text-center p-2 rounded-lg bg-blue-50 space-y-3">
                    <h1 className="font-bold">{post?.title}</h1>
                    <p className="pb-5">{post.body}</p>
                    <button className="pb-3"><Link href={`/posts/${post.id}`} className="border rounded-lg p-2 bg-gray-700 hover:bg-gray-800 duration-300 text-white">View Details</Link></button>
                </div>)
            }
        </div>
    );
};

export default PostPage;