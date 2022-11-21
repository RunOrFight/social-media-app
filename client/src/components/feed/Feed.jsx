import cls from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className={cls.container}>
      <Share />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
