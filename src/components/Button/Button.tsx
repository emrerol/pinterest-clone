import React from "react";
import "./Button.css";

export enum BUTTON_TYPES {
  login = "header--login",
  register = "header--register",
}

export enum BUTTON_TEXT {
  login = "Oturum Aç",
  register = "Kaydol",
}

type ButtonProps = {
  buttonType: BUTTON_TYPES;
  text: BUTTON_TEXT;
};

const HeaderButton = ({ buttonType, text }: ButtonProps) => {
  return (
    <button className={`header__auth__button ${buttonType}`}>{text}</button>
  );
};

export default HeaderButton;
