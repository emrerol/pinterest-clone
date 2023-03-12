import "./App.css";
import Login from "./components/Auth/Login/Login";
import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Backdrop />
    </div>
  );
}

export default App;
