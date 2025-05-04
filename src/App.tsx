import { Route, Routes } from "react-router";

import Navbar from "./Navbar";
import ProductSection from "./ProductSection";
import Cart from "./Cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductSection />} />
      </Routes>
    </>
  );
}

export default App;
