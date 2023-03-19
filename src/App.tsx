import "./App.css";
import Header from "./components/Header/Header";
import HeroLayout from "./layout/HeroLayout/HeroLayout";

function App() {
  return (
    <>
      <div className="first" style={{ overflow: "hidden", height: "100vh" }}>
        <Header />
        <HeroLayout />
      </div>
    </>
  );
}

export default App;
