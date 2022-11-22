import cls from "./FriendList.module.css";
import User from "../user/User";

const FriendList = ({ usersToDisplay = [], type = "list" }) => {
  return (
    <div className={cls.container}>
      <ul className={type === "tile" ? cls.tiles : cls.list}>
        {usersToDisplay.map((user) => {
          const { username, ...rest } = user;
          return (
            <User
              user={type === "tile" ? rest : user}
              style={{ marginBottom: "15px" }}
              key={user.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
