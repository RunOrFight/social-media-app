import cls from "./Profile.module.css";
import users from "../../data/users.json";
import Feed from "../../components/feed/Feed";
import FriendList from "../../components/friendList/FriendList";
const Profile = () => {
  const user = users[5];
  const followings = user.followings.map((id) => {
    return users.find((user) => user.id === id);
  });
  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <img
          className={cls.cover}
          src={user.coverPicture}
          alt='cover'
        />
        <div className={cls.profile}>
          <img
            src={user.profilePicture}
            alt='face'
          />
          <h1>{user.username}</h1>
          <p>{user.description}</p>
        </div>
      </div>
      <div className={cls.main}>
        <Feed user={user} />
        <div className={cls.right}>
          <section className={cls.info}>
            <h4>User Information:</h4>
            <div className={cls.item}>
              <span>City: </span>
              <span>{user.city}</span>
            </div>
            <div className={cls.item}>
              <span>From: </span>
              <span>{user.from}</span>
            </div>
            <div className={cls.item}>
              <span>Relationship: </span>
              <span>
                {user.relationship === 0 ? "Single" : "Has a partner"}
              </span>
            </div>
          </section>
          <section className={cls.friends}>
            <h4>User Friends:</h4>
            <FriendList
              type='tile'
              usersToDisplay={followings}
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Profile;
