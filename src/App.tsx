import "./App.css";
// import Login from "./components/Auth/Login/Login";
import Header from "./components/Header/Header";
import { useSelector } from "react-redux";
// import Register from "./components/Auth/Register/Register";

function App() {
  const loginState = useSelector((state) => state);
  console.log(loginState);

  return (
    <div className="App">
      <Header />
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
