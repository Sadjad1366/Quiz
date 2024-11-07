//directive
"use client"

import { fetchUsersLists } from "@/apis/users.api";
import UserCard from "@/components/UserCard";
import { IUser } from "@/types/userType"
import React from "react";

export default function Users() {
  const [allUsers, setAllUsers] = React.useState<IUser[]>([]);
  const [skip, setSkip] = React.useState(0);
  const limit = 30;

  // const posts = useQuery({
  //   queryKey: ["fetching-posts", skip],
  //   queryFn: () => fetchPostsList(skip, limit),
  // });

  const loadMore = () => {
    setSkip(skip + limit);
  };

  React.useEffect(() => {

    const response = fetchUsersLists(skip, limit)

    console.log(response.then((res)=> {
     if (res.users) {
      setAllUsers([...allUsers, ...res.users])
    }
  }));

    // }
  }, []);

  // React.useEffect(() => {
  //   if (!posts.error || !posts.isError) return;
  //   throw new Error("There is no posts");
  //   // passing AAA to error boundary
  // }, [posts.error, posts.isError]);

  return (
    <section>
      {/* {posts.isLoading && allPosts.length === 0 ? (
        <div>Loading posts...</div>
      ) : posts.isError ? (
        <div>Error loading posts.</div>
      ) : (
        <div>
          <h2 className="text-xl font-bold p-2">Posts List</h2>
          <div> */}
          {allUsers.map((user) => (
              <UserCard key={user.id} user = {user} />
            ))}
          {/* </div> */}
          {/* {posts.data && posts.data.total > skip + limit && (
            <button onClick={loadMore}>Show More</button>
          )} */}
        {/* </div> */}

      {/* )} */}
    </section>
  );
}
