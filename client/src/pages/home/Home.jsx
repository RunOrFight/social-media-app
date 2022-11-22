import cls from "./Home.module.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <div className={cls.container}>
      <Feed />
      <Rightbar />
    </div>
  );
};

export default Home;
