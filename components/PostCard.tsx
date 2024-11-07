import { AiTwotoneDislike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { GrFormView } from "react-icons/gr";
import { IPost } from "../types/posts.type";
import router, { useRouter } from "next/router";
import Link from "next/link";

export const PostCard: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <div className="bg-slate-200 flex flex-col gap-y-3 my-3 p-4">
      {/* <div
      className="font-bold text-xl">
     {post.title}
      </div> */}
      <Link  href={`/post/${post.id}`}>
        {post.title}
      </Link>
      <div className="text-xl font-medium">{post.body}</div>
      <div className="flex gap-x-3">
        {" "}
        {post.tags.map((tag) => (
          <div>{tag}</div>
        ))}
      </div>
      <div className="flex gap-x-4">
        <div className="flex justify-center items-center">
          <AiOutlineLike /> {post.reactions.likes}
        </div>
        <div className="flex justify-center items-center">
          <AiTwotoneDislike /> {post.reactions.dislikes}
        </div>
        <div className="flex justify-center items-center">
          <GrFormView />
          {post.views}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
