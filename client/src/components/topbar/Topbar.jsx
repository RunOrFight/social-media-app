import cls from "./Topbar.module.css";
import {
  SearchSharp,
  PersonSharp,
  ChatSharp,
  NotificationsSharp
} from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className={cls.container}>
      <div className={cls.logo}>My Social</div>
      <div className={cls.searchbar}>
        <SearchSharp />
        <input
          type='text'
          placeholder='Search for friends, posts or video'
        />
      </div>
      <div className={cls.links}>
        <span className={cls.link}>Homepage</span>
        <span className={cls.link}>Timeline</span>
      </div>
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
        className={cls.user_image}
        src='/assets/users/sasha.jpeg'
        alt='Profile'
      />
    </div>
  );
};

export default Topbar;
