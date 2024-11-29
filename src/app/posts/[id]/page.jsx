import { getPostDetails } from "@/services/postApi";

const PostDetailsPage = async ({ params }) => {
    // console.log(params.id);
    const postDetails = await getPostDetails(params.id)
    // console.log(postDetails);
    return ( 
        <div className="text-center w-[80%] mx-auto bg-sky-50 rounded-lg p-3">
            <h1 className="font-bold">{postDetails.id} : {postDetails.title}</h1>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default PostDetailsPage;