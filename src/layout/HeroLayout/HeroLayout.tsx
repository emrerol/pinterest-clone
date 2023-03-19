import { useEffect, useState } from "react";
import "./HeroLayout.css";
import HeroStickyButton from "../../components/HeroStickyButton/HeroStickyButton";
import HeroStickyJump from "../../components/HeroStickyJump/HeroStickyJump";
import ImageContainer from "../../components/ImageContainer/ImageContainer";

const TEXTS = [
  {
    id: 1,
    color: "#0fa573",
    text: "ev dekorasyonu fikri",
  },
  {
    id: 2,
    color: "#0074e8",
    text: "yeni giyim stili",
  },
  {
    id: 3,
    color: "#0a6955",
    text: "bahçecilik fikri",
  },
  {
    id: 4,
    color: "#e3780c",
    text: "hafta içi akşam yemeği fikri",
  },
];

const IMAGES = [
  {
    second:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    first:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    first:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    second:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    second:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    first:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    first:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    second:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    second:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    first:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    first:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    second:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
  {
    second:
      "https://i.pinimg.com/550x/a7/87/20/a78720c39a39ac50a2856420d636d113.jpg",

    first:
      " https://i.pinimg.com/236x/f1/13/df/f113df475d4566caa0075c6729960fa3.jpg",
  },
];

const HeroLayout = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text + 1) % TEXTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [text]);

  let buttonColor = TEXTS[text].color;

  return (
    <section className="hero__section">
      <div className="hero__section__slide">
        <div className="hero__section__slide--images">
          {IMAGES.map((imgFi) => (
            <ImageContainer
              firstImage={imgFi.first}
              secondImage={imgFi.second}
            />
          ))}
        </div>
        <div className="hero__section__slide--text">
          <h1>Sıradaki fikri bulun</h1>
          {TEXTS.filter((txt) => txt.id === text + 1).map((item) => (
            <span key={item.id} style={{ color: item.color }}>
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <div className="hero__section__buttons">
        <HeroStickyJump btnColor={buttonColor} />
        <HeroStickyButton />
      </div>
    </section>
  );
};

export default HeroLayout;
