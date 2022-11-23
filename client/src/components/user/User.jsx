import cls from "./User.module.css";

const User = ({ user, style }) => {
  return (
    <div
      className={cls.container}
      style={style}>
      <div className={cls.avatar}>
        <img
          className='avatar'
          src={
            user.profilePicture ||
            "https://api.lorem.space/image/face?dummyId=" + user._id
          }
          alt='Friend'
        />
        {user.online && <span className={cls.online}></span>}
      </div>

      <span className={cls.name}>{user.username}</span>
    </div>
  );
};

export default User;
