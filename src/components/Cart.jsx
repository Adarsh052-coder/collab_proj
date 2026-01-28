const Cart = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="border rounded-lg p-4 mb-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Wireless Headphones</h3>
          <p className="text-gray-500">$99</p>
        </div>
        <button className="text-red-500">Remove</button>
      </div>

      <div className="text-right">
        <p className="text-lg font-semibold">Total: $99</p>
        <button className="mt-4 bg-indigo-600 text-white px-6 py-3 rounded-lg">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
