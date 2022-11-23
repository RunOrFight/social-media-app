import cls from "./Post.module.css";
import {
  MoreVertSharp,
  FavoriteBorderSharp,
  FavoriteSharp
} from "@mui/icons-material";
import User from "../user/User";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const responce = await axios.get(`users/${post.userId}`);
      setUser(responce.data);
    };
    fetchUser();
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
          <span className={cls.publish_date}>{format(post.createdAt)}</span>
          <MoreVertSharp />
        </div>
        <div className={cls.center}>
          <div className={cls.post_text}>{post.description}</div>
          <img
            className={cls.post_img}
            src={
              post.image ||
              "https://api.lorem.space/image?w=1200&dummyId=" + post._id
            }
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
          <span className={cls.comment_counter}>{1} comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
