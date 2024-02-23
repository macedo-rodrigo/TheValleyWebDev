import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };

  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="slider" data-testid="slider-component">
      <div className="slider__image-container">
        {images &&
          images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`slider__image ${
                index === currentImage ? "slider__image--visible" : ""
              }`}
            />
          ))}
      </div>
      <div className="slider__text-container">
        <h2 className="slider__title">{images[currentImage].title}</h2>
        <p className="slider__description">
          {images[currentImage].description}
        </p>
      </div>
      <div className="slider__button-container">
        <button
          onClick={handlePrevClick}
          className="slider__button slider__button--prev"
        >
          Anterior
        </button>
        <button
          onClick={handleNextClick}
          className="slider__button slider__button--next"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Slider;
