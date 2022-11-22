import cls from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import posts from "../../data/posts.json";
import { useMemo } from "react";

const Feed = ({ user }) => {
  const _posts = useMemo(() => {
    return posts.filter((post) => (user.id ? post.userId === user.id : true));
  }, [user.id]);
  return (
    <div className={cls.container}>
      <Share user={user} />
      {_posts.map((post) => {
        return (
          <Post
            post={post}
            key={post.id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
