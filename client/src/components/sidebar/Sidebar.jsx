import React from "react";
import cls from "./Sidebar.module.css";
import {
  RssFeedSharp,
  ChatSharp,
  VideocamSharp,
  PeopleSharp,
  TurnedInSharp,
  HelpSharp,
  WorkSharp,
  EventSharp,
  SchoolSharp
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <ul className={cls.list}>
          <li className={cls.item}>
            <RssFeedSharp />
            <span>Feed</span>
          </li>
          <li className={cls.item}>
            <ChatSharp />
            <span>Chats</span>
          </li>
          <li className={cls.item}>
            <VideocamSharp />
            <span>Videos</span>
          </li>
          <li className={cls.item}>
            <PeopleSharp />
            <span>Groups</span>
          </li>
          <li className={cls.item}>
            <TurnedInSharp />
            <span>Bookmarks</span>
          </li>
          <li className={cls.item}>
            <HelpSharp />
            <span>Questions</span>
          </li>
          <li className={cls.item}>
            <WorkSharp />
            <span>Jobs</span>
          </li>
          <li className={cls.item}>
            <EventSharp />
            <span>Events</span>
          </li>
          <li className={cls.item}>
            <SchoolSharp />
            <span>Courses</span>
          </li>
        </ul>
        <button className={cls.button}>Show More</button>
        <hr className={cls.separator} />
        <ul className={cls.friend_list}>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
          <li className={cls.friend}>
            <img
              className={`${cls.avatar} avatar`}
              src='/assets/users/nika.jpeg'
              alt='Friend'
            />
            <span className={cls.friend_name}>Nika Bohdzel</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
