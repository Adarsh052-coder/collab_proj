import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99,
    image: "https://images.unsplash.com/photo-1518441989937-5c2a8b94b8a6",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 149,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    title: "Running Shoes",
    price: 89,
    image: "https://images.unsplash.com/photo-1528701800489-20be3c5fa9e8",
  },
  {
    id: 4,
    title: "Backpack",
    price: 59,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
