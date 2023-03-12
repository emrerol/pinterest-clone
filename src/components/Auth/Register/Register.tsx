import "./Register.css";
import { registerActions } from "../../../store/auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { RegisterRequest } from "../../../types/register";

const Register = () => {
  const registerState = useSelector((state: RegisterRequest) => state);
  const { email, password, age } = registerState;
  const dispatch = useDispatch();

  const registerHandler = () => {
    dispatch(registerActions.register({ email, password, age }));
  };
  return (
    <div className="register">
      <form onSubmit={registerHandler}>Register Form</form>
    </div>
  );
};

export default Register;
