import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageGallery from "./ImageGallery";
import Reviews from "./Reviews";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product details
    fetch(`/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <ImageGallery images={product.images} />
      <Reviews reviews={product.reviews} />
    </div>
  );
}

export default ProductDetails;
