import { useEffect, useState } from "react";
import "./HeroLayout.css";
import HeroStickyButton from "../../components/HeroStickyButton/HeroStickyButton";

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

//TODO: 7 Parçalı bir Image section oluşturulacak. Her bir parça iki adet image alacak

const HeroLayout = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText((text + 1) % TEXTS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <section className="hero__section">
      <h1>sıradaki fikri bulun</h1>
      {TEXTS.filter((txt) => txt.id === text + 1).map((item) => (
        <span key={item.id} style={{ color: item.color }}>
          {item.text}
        </span>
      ))}
      <HeroStickyButton />
    </section>
  );
};

export default HeroLayout;
