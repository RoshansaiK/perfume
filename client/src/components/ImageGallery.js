import React from "react";

function ImageGallery({ images }) {
  return (
    <div className="image-gallery">
      {images &&
        images.map((img, index) => (
          <img key={index} src={img} alt={`Perfume ${index}`} />
        ))}
    </div>
  );
}

export default ImageGallery;
