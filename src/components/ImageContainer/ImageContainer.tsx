import "./ImageContainer.css";

type ImageContainerType = {
  firstImage: string;
  secondImage: string;
};

const ImageContainer = ({ firstImage, secondImage }: ImageContainerType) => {
  return (
    <div className="image__container">
      <div className="image__container--item">
        <img src={firstImage} />
      </div>
      <div className="image__container--item">
        <img src={secondImage} />
      </div>
    </div>
  );
};

export default ImageContainer;
