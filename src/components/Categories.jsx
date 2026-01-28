const categories = [
  { name: "Electronics", img: "https://img.icons8.com/color/96/laptop.png" },
  { name: "Fashion", img: "https://img.icons8.com/color/96/t-shirt.png" },
  { name: "Groceries", img: "https://img.icons8.com/color/96/shopping-basket.png" },
  { name: "Beauty", img: "https://img.icons8.com/color/96/cosmetics.png" },
  { name: "Sports", img: "https://img.icons8.com/color/96/dumbbell.png" },
];

const Categories = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 flex flex-col items-center hover:shadow-md cursor-pointer"
          >
            <img src={cat.img} alt={cat.name} className="w-16 h-16" />
            <p className="mt-3 font-medium">{cat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
