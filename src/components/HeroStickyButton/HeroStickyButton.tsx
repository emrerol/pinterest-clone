import "./HeroStickyButton.css";
import { ChevronDown } from "react-feather";

const HeroStickyButton = () => {
  const clickHandler = () => {
    console.log("tikladın");
  };

  return (
    <button className="hero__sticky" onClick={clickHandler}>
      <p>Bu, şu şekilde işler</p>
      <ChevronDown width={20} height={20} />
    </button>
  );
};

export default HeroStickyButton;
