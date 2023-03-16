import "./Register.css";
import { useEffect, useState } from "react";
import { registerActions } from "../../../store/auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RegisterRequest } from "../../../types/register";

const Register = () => {
  const registerState = useSelector((state: RegisterRequest) => state);
  const { email, password } = registerState;
  const [user, setUser] = useState(registerState);
  const dispatch = useDispatch();

  const registerHandler = () => {
    dispatch(registerActions.register(user));
  };

  return (
    <div className="register">
      <form onSubmit={registerHandler}>
        <label htmlFor={email}>Your Email</label>
        <input
          type="email"
          name={email}
          id={email}
          required
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <label htmlFor={password}>Password</label>
        <input
          type="password"
          name={password}
          id={password}
          required
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Register;
