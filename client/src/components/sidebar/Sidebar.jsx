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
import FriendList from "../friendList/FriendList";

const Sidebar = () => {
  return (
    <div className={cls.container}>
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
      <FriendList />
    </div>
  );
};

export default Sidebar;
