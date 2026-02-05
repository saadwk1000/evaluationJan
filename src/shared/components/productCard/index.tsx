import React from "react";
import "./style.module.scss";

type ProductStatus = "in stock" | "out of stock";

interface ProductCardProps {
  name: string;
  category: string;
  quantity: number;
  status: ProductStatus;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  category,
  quantity,
  status,
}) => {
  const isInStock = status === "in stock";

  return (
    <div className="product-card">
      <h3 className="product-card__name">{name}</h3>

      <p className="product-card__category">
        <span>Category:</span> {category}
      </p>

      <p className="product-card__quantity">
        <span>Quantity:</span> {quantity}
      </p>

      <p
        className={`product-card__status ${
          isInStock ? "in-stock" : "out-of-stock"
        }`}
      >
        {isInStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
