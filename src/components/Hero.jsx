const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Discover the Best <span className="text-indigo-600">Deals</span> <br />
            on Your Favorite Products
          </h1>

          <p className="mt-4 text-gray-600">
            Shop the latest trends with unbeatable prices and fast delivery.
            Everything you need, all in one place.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
              Shop Now
            </button>
            <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
              View Deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1521334884684-d80222895322"
            alt="Shopping"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
