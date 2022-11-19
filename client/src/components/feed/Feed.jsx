import cls from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <Share />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
