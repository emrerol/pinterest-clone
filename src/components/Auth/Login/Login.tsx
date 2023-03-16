import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../store/auth/loginSlice";
import { LoginRequest } from "../../../types/login";

const Login = () => {
  const loginState = useSelector((state: LoginRequest) => state);
  const { email, password } = loginState;

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginActions.logIn(loginState));
  };
  return (
    <div className="login">
      <form onSubmit={loginHandler}>
        <label htmlFor="email">Your Email</label>
        <input type="email" name="email" id="email" value={email} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} />
      </form>
    </div>
  );
};

export default Login;
