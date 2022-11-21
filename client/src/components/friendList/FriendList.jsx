import cls from "./FriendList.module.css";
import users from "../../data/users.json";
import { useMemo } from "react";
import User from "../user/User";

const FriendList = ({ filter }) => {
  const _users = useMemo(() => {
    return users.filter((user) => (filter ? user[filter] === true : true));
  }, [filter]);

  return (
    <div className={cls.container}>
      <ul className={cls.list}>
        {_users.map((user) => {
          return (
            <User
              user={user}
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
