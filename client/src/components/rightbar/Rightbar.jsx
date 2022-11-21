import cls from "./Rightbar.module.css";
import { CakeSharp } from "@mui/icons-material";
import FriendList from "../friendList/FriendList";

const Rightbar = () => {
  return (
    <div className={cls.container}>
      <div className={cls.birthday}>
        <CakeSharp />
        <span>
          <b>Nika Bohdzel</b> and <b>3 other friends</b> have a birthday today
        </span>
      </div>
      <img
        src='/assets/ad.jpeg'
        alt='AD'
        className={cls.ad}
      />
      <h4 className={cls.title}>Online Friends</h4>
      <FriendList filter='online' />
    </div>
  );
};

export default Rightbar;
