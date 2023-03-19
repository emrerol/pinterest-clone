import "./HeroStickyJump.css";
import { ChevronDown } from "react-feather";
interface IButtonColor {
  btnColor: string;
}

const HeroStickyJump = ({ btnColor }: IButtonColor) => {
  return (
    <ChevronDown
      className="hero_sticky_jump"
      width={28}
      height={28}
      style={{ backgroundColor: btnColor }}
    />
  );
};

export default HeroStickyJump;
