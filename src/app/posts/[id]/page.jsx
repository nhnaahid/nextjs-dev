import { getPostDetails } from "@/services/postApi";

const PostDetailsPage = async ({ params }) => {
    const postDetails = await getPostDetails(params.id)
    return (
        <div className="text-center w-[75%] mx-auto bg-sky-100 rounded-lg p-3 space-y-2">
            <h1 className="font-bold">{postDetails.id} : {postDetails.title}</h1>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetailsPage;