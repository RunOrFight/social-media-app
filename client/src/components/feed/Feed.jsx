import cls from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import posts from "../../data/posts.json";

const Feed = () => {
  return (
    <div className={cls.container}>
      <Share />
      {posts.map((post) => {
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
