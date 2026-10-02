function ProductCard({ title, price, category }) {
  return (
    <div className="product-card">
      <h2>{title}</h2>

      <p>
        <strong>Category:</strong> {category}
      </p>

      <p>
        <strong>Price:</strong> ${price}
      </p>
    </div>
  );
}

export default ProductCard;