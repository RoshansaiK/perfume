import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ProductCard = ({ id, name, url, imageUrl }) => {
  const shareUrl = window.location.origin + url; // Construct the full URL for sharing

  const handleShare = (platform) => {
    let shareLink;

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          shareUrl
        )}&text=${encodeURIComponent(name)}`;
        break;
      case "whatsapp":
        shareLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          name
        )}%20${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }

    window.open(shareLink, "_blank");
  };

  // Inline styles with a refined perfume aesthetic
  const styles = {
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      margin: "15px",
      textAlign: "center",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Added shadow for depth
      backgroundColor: "#f9f9f9", // Light background for contrast
    },
    title: {
      marginBottom: "10px",
      color: "#3b2e5b", // Deep purple for elegance
      fontSize: "20px", // Increased font size for title
      fontWeight: "600", // Semi-bold for emphasis
    },
    button: {
      padding: "10px 15px",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#3b2e5b", // Deep purple for button background
      color: "white",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#5a4d8c", // Lighter purple on hover
    },
    shareButtons: {
      marginTop: "10px",
    },
    shareButton: {
      margin: "0 5px",
      padding: "8px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "transparent", // Make background transparent
      color: "#3b2e5b", // Deep purple for icons
      transition: "color 0.3s ease",
    },
    icon: {
      fontSize: "20px", // Adjust icon size
    },
    image: {
      width: "100%", // Make image responsive
      height: "auto",
      borderRadius: "5px",
      marginBottom: "10px", // Add margin below the image
    },
  };

  return (
    <div style={styles.productCard}>
      {/* Display product image */}
      <img src={imageUrl} alt={name} style={styles.image} />
      <h3 style={styles.title}>{name}</h3>
      <Link to={url}>
        <button
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor)
          }
        >
          View for more Details
        </button>
      </Link>

      {/* Share buttons with icons */}
      <div style={styles.shareButtons}>
        <button
          style={styles.shareButton}
          onClick={() => handleShare("facebook")}
        >
          <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
        </button>
        <button
          style={styles.shareButton}
          onClick={() => handleShare("twitter")}
        >
          <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
        </button>
        <button
          style={styles.shareButton}
          onClick={() => handleShare("whatsapp")}
        >
          <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
