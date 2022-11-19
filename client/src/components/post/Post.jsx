import cls from "./Post.module.css";
import { MoreVertSharp, FavoriteBorderSharp } from "@mui/icons-material";

const Post = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <div className={cls.top}>
          <img
            src='/assets/users/sasha.jpeg'
            className={`${cls.avatar} avatar`}
            alt='person'
          />
          <span className={cls.user_name}>Alexander Mikhnyuk</span>
          <span className={cls.publish_date}>5 mins ago</span>
          <MoreVertSharp />
        </div>
        <div className={cls.center}>
          <span className={cls.post_text}>Hello! It's my first post</span>
          <img
            className={cls.post_img}
            src='/assets/posts/bison.jpeg'
            alt='bison'
          />
        </div>
        <div className={cls.bottom}>
          <FavoriteBorderSharp />
          <span className={cls.like_counter}>32 people like it</span>
          <span className={cls.comment_counter}>9 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
