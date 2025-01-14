
import { IComment } from "../types/commentType";
import { IResDto } from "../types/globalType";
import { IPost } from "../types/posts.type";
import { IUser } from "../types/userType";
import { generateClient } from "./client";
import { urls } from "./urls";

interface IFetchUsersResDto extends IResDto {
  users: IUser[];
}
interface IFetchPostsResDto extends IResDto {
  posts: IPost[];
}

interface IFetchPostCommentsResDto extends IResDto {
  comments: IComment[];
}


type fetchUsersListsType = (
  skip: number,
  limit: number
) => Promise<IFetchUsersResDto>;
export const fetchUsersLists: fetchUsersListsType = async (skip, limit) => {
  const client = generateClient();
  const response = await client.get<IFetchUsersResDto>(
    `${urls.users.users}?skip=${skip}&limit=${limit}`
  );
  return response.data;
};

type fetchPostsListType = (
  skip: number,
  limit: number
) => Promise<IFetchPostsResDto>;
export const fetchPostsList: fetchPostsListType = async (skip, limit) => {
  const client = generateClient();
  const response = await client.get<IFetchPostsResDto>(
    `${urls.posts.list}?skip=${skip}&limit=${limit}`
  );

  return response.data;
};

type fetchPostByIdType = (_: number) => Promise<IPost>;
export const fetchPostById: fetchPostByIdType = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IPost>(urls.posts.byId(id));
  return response.data;
};

type fetchUserByIdType = (_: number) => Promise<IUser>;
export const fetchUserById: fetchUserByIdType = async (id: number) => {
  const client = generateClient();
  const response = await client.get<IUser>(urls.users.byId(id));
  return response.data;
};


type fetchUserPostsType = (_: number) => Promise<IPost[]>;
export const fetchUserPosts: fetchUserPostsType = async (userId: number) => {
  const client = generateClient();
  const response = await client.get<IFetchPostsResDto>(urls.users.posts(userId));
  return response.data.posts;
};


type fetchPostCommentsType = (_: number) => Promise<IComment[]>;
export const fetchPostComments: fetchPostCommentsType = async (postId: number) => {
  const client = generateClient();
  const response = await client.get<IFetchPostCommentsResDto>(urls.posts.comments(postId));
  return response.data.comments;
};
