import { getPosts } from "@/services/postApi";

const PostPage = async () => {
    const posts = await getPosts();
    console.log(posts);
    return (
        <div className="grid grid-cols-4 gap-3">
            {
                posts.slice(0, 20).map(post => <div key={post?.id} className="border text-center p-2 rounded-lg bg-blue-50">
                    <h1 className="font-bold">{post?.title}</h1>
                    <p>{post.body}</p>
                </div>)
            }
        </div>
    );
};

export default PostPage;