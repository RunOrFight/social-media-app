import cls from "./Topbar.module.css";
import {
  SearchSharp,
  PersonSharp,
  ChatSharp,
  NotificationsSharp
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className={cls.container}>
      <div className={cls.left}>
        <Link to='/'>
          <span className={cls.logo}>My Social</span>
        </Link>
        <div className={cls.links}>
          <Link to='/'>
            <span className={cls.link}>Homepage</span>
          </Link>

          <span className={cls.link}>Timeline</span>
        </div>
      </div>
      <div className={cls.center}>
        <div className={cls.searchbar}>
          <SearchSharp />
          <input
            type='text'
            placeholder='Search for friends, posts or video'
          />
        </div>
      </div>
      <div className={cls.right}>
        <div className={cls.icons}>
          <div className={cls.icon}>
            <PersonSharp />
            <span className={cls.badge}>9</span>
          </div>
          <div className={cls.icon}>
            <ChatSharp />
            <span className={cls.badge}>5</span>
          </div>
          <div className={cls.icon}>
            <NotificationsSharp />
            <span className={cls.badge}>9</span>
          </div>
        </div>
        <img
          className='avatar'
          src='/assets/users/sasha.jpeg'
          alt='Profile'
        />
      </div>
    </div>
  );
};

export default Topbar;
