import cls from "./Feed.module.css";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";
import axios from "axios";

const Feed = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const responce = await axios.get(
        "posts/timeline/6374db6e14566375b5867ee9"
      );
      setPosts(responce.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className={cls.container}>
      {user && <Share user={user} />}
      {posts.map((post) => {
        return (
          <Post
            post={post}
            key={post._id}
          />
        );
      })}
    </div>
  );
};

export default Feed;
