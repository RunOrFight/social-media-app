import { useState } from "react";
import AuthForm from "../../components/authForm/AuthForm";
import cls from "./Auth.module.css";

const Auth = () => {
  const [type, setType] = useState("login");
  return (
    <div className={cls.container}>
      <div className={cls.wrapper}>
        <div className={cls.left}>
          <h3 className={cls.logo}>My Social</h3>
          <span className={cls.description}>
            Connect with friends and the world around you on My Social.
          </span>
        </div>
        <AuthForm
          type={type}
          setType={setType}
        />
      </div>
    </div>
  );
};

export default Auth;
