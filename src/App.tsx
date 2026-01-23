import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

import MetallurgicalPage from "./productpages/MetallurgicalPage";
import NDTPage from "./productpages/NDTPage";
import PhysicalTestingPage from "./productpages/PhysicalTestingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ChemicalTestingPage from "./productpages/ChemicalTestingPage";
import FoundryPage from "./productpages/FoundryPage";
import UltrasonicPage from "./productpages/UltrasonicPage";
import ConsumablesPage from "./productpages/ConsumablesPage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/metallurgical" element={<MetallurgicalPage />} />
        <Route path="/products/ndt" element={<NDTPage />} />
        <Route path="/products/physical-testing" element={<PhysicalTestingPage />} />
        <Route path="/products/chemical-testing" element={<ChemicalTestingPage />} />
        <Route path="/products/foundry" element={<FoundryPage />} />
        <Route path="/products/ultrasonic" element={<UltrasonicPage />} />
        <Route path="/products/consumables" element={<ConsumablesPage />} />  
        


        {/* SEO-friendly product URL */}
        <Route path="/products/ndt/:slug" element={<ProductDetailPage />} />
        <Route path="/products/metallurgical/:slug" element={<ProductDetailPage />} />
        <Route path="/products/physical-testing/:slug" element={<ProductDetailPage />} />
        <Route path="/products/chemical-testing/:slug" element={<ProductDetailPage />} />
        <Route path="/products/foundry/:slug" element={<ProductDetailPage />} />
        <Route path="/products/ultrasonic/:slug" element={<ProductDetailPage />} />
        <Route path="/products/consumables/:slug" element={<ProductDetailPage />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
