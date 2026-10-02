import ProductCard from "./productcard";

function Task1() {
  return (
    <section className="task-section">
      <h1>Task 1: Product Cards</h1>

      <div className="product-container">
        <ProductCard
          title="Wireless Headphones"
          price="59.99"
          category="Electronics"
        />

        <ProductCard
          title="Running Shoes"
          price="89.99"
          category="Footwear"
        />
      </div>
    </section>
  );
}

export default Task1;