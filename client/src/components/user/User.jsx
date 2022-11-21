import cls from "./User.module.css";

const User = ({ user, style }) => {
  return (
    <div
      className={cls.container}
      style={style}>
      <div className={cls.avatar}>
        <img
          className='avatar'
          src={user.profilePicture}
          alt='Friend'
        />
        {user.online && <span className={cls.online}></span>}
      </div>

      <span className={cls.name}>{user.username}</span>
    </div>
  );
};

export default User;
