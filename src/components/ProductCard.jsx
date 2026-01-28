const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded-lg"
      />

      <h3 className="mt-3 font-semibold">{product.title}</h3>
      <p className="text-gray-600 text-sm">${product.price}</p>

      <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
