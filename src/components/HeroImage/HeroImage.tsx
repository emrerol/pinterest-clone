import "./HeroImage.css";

export type HeroImageProps = {
  image: any;
  altText: string;
};

const HeroImage = ({ image, altText }: HeroImageProps) => {
  return (
    <div className="hero__image">
      <img src={image} alt={altText} className="hero__image--image" />
    </div>
  );
};

export default HeroImage;
