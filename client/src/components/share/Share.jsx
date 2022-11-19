import cls from "./Share.module.css";
import {
  PermMediaSharp,
  LabelSharp,
  RoomSharp,
  EmojiEmotionsSharp
} from "@mui/icons-material";

const Share = () => {
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <div className={cls.top}>
          <img
            className={`${cls.avatar} avatar`}
            src='/assets/users/sasha.jpeg'
            alt='Profile'
          />
          <input
            placeholder='What is your mind, Sasha?'
            type='text'
          />
        </div>
        <hr className={cls.separator} />
        <div className={cls.bottom}>
          <div className={cls.options}>
            <div className={cls.option}>
              <PermMediaSharp htmlColor='chocolate' />
              <span>Photo or Video</span>
            </div>
            <div className={cls.option}>
              <LabelSharp htmlColor='chocolate' />
              <span>Tag</span>
            </div>
            <div className={cls.option}>
              <RoomSharp htmlColor='chocolate' />
              <span>Location</span>
            </div>
            <div className={cls.option}>
              <EmojiEmotionsSharp htmlColor='chocolate' />
              <span>Feelings</span>
            </div>
          </div>
          <button className={cls.button}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
