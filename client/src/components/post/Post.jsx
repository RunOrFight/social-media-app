import cls from "./Post.module.css";
import {
  MoreVertSharp,
  FavoriteBorderSharp,
  FavoriteSharp
} from "@mui/icons-material";
import users from "../../data/users.json";
import User from "../user/User";
import { useMemo, useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);

  const [isLiked, setIsLiked] = useState(false);

  const user = useMemo(() => {
    return users.find((user) => user.id === post.userId);
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <div className={cls.top}>
          <User
            user={user}
            style={{ marginRight: "15px" }}
          />
          <span className={cls.publish_date}>{post.date}</span>
          <MoreVertSharp />
        </div>
        <div className={cls.center}>
          <div className={cls.post_text}>{post.description}</div>
          <img
            className={cls.post_img}
            src={post.image}
            alt='bison'
          />
        </div>
        <div className={cls.bottom}>
          {isLiked ? (
            <FavoriteSharp
              onClick={likeHandler}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <FavoriteBorderSharp
              onClick={likeHandler}
              style={{ cursor: "pointer" }}
            />
          )}
          <span className={cls.like_counter}>{like} people like it</span>
          <span className={cls.comment_counter}>
            {post.comments.length} comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
