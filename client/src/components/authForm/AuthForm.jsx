import cls from "./AuthForm.module.css";

const AuthForm = ({ type, setType }) => {
  const isRegister = type === "register";
  return (
    <div className={cls.container}>
      <form
        action='POST'
        className={cls.auth}>
        {isRegister && (
          <input
            type='text'
            placeholder='Username'
          />
        )}
        <input
          type='text'
          placeholder='Email'
        />
        <input
          type='text'
          placeholder='Password'
        />
        {isRegister && (
          <input
            type='text'
            placeholder='Password again'
          />
        )}
        <button>{isRegister ? "Sign Up" : "Log In"}</button>
        {!isRegister && (
          <span className={cls.forgot_pas}>Forgot Password?</span>
        )}
        {!isRegister && <hr />}
        <button
          className={cls.register}
          onClick={(e) => {
            e.preventDefault();
            setType(isRegister ? "login" : "register");
          }}>
          {isRegister ? "Log Into Account" : "Create a new account"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
