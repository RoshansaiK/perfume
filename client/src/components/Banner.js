import React, { useState, useEffect } from "react";

function Banner() {
  const images = [
    "https://stylecaster.com/wp-content/uploads/2015/04/perfumes.jpg", // Replace with actual image URLs
    "https://activecarestore.co.uk/cdn/shop/articles/blog_1.jpg?v=1574317621",
    "https://theayurvedaco.com/cdn/shop/files/8904422901988-1.jpg?v=1718773889",
    "https://elle.in/wp-content/uploads/2023/02/GettyImages-1425306915-scaled.jpg",
    "https://www.lylablanc.in/cdn/shop/collections/Buy_perfumes_online.png?v=1718021978",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Inline CSS for the banner and images
  const styles = {
    bannerContainer: {
      position: "relative",
      width: "100%",
      height: "400px",
      overflow: "hidden",
    },
    imageSlide: {
      display: "flex",
      transition: "transform 1s ease-in-out",
      transform: `translateX(-${currentImageIndex * 100}%)`,
    },
    image: {
      minWidth: "100%",
      height: "400px",
      objectFit: "cover",
    },
    leftArrow: {
      position: "absolute",
      top: "50%",
      left: "20px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: "1",
    },
    rightArrow: {
      position: "absolute",
      top: "50%",
      right: "20px",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      color: "white",
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      zIndex: "1",
    },
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <div style={styles.bannerContainer}>
      <div style={styles.imageSlide}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index}`}
            style={styles.image}
          />
        ))}
      </div>

      {/* Left and Right navigation arrows */}
      <div style={styles.leftArrow} onClick={goToPrevSlide}>
        &#10094;
      </div>
      <div style={styles.rightArrow} onClick={goToNextSlide}>
        &#10095;
      </div>
    </div>
  );
}

export default Banner;
