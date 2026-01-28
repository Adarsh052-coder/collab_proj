import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";

// A quick wrapper for the Landing/Home page
const Home = () => (
  <>
    <Hero />
    <Categories />
    {/* <FeaturedProducts /> - Ensure this is imported if you use it */}
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;