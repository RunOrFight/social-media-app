import cls from "./FriendList.module.css";

const FriendList = () => {
  return (
    <div className={cls.container}>
      <ul className={cls.list}>
        <li className={cls.friend}>
          <div className={cls.avatar}>
            <img
              className='avatar'
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.online}></span>
          </div>

          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
        <li className={cls.friend}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/nika.jpeg'
            alt='Friend'
          />
          <span className={cls.name}>Nika Bohdzel</span>
        </li>
      </ul>
    </div>
  );
};

export default FriendList;
