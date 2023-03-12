import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../../store/auth/loginSlice";
import { LoginRequest } from "../../../types/login";

const Login = () => {
  const loginState = useSelector((state: LoginRequest) => state);
  const { email, password } = loginState;

  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(loginActions.logIn({ email, password }));
  };
  return (
    <div className="login">
      <form onSubmit={loginHandler}>Login Form</form>
    </div>
  );
};

export default Login;
