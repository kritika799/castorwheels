import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Features from "./pages/Features";
import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Industries from "./Industries";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  return (
    <div className="font-display bg-background-light text-slate-800 antialiased selection:bg-blue-100 selection:text-primary">
      <Router>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/request-info" element={<Form />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<ProductDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/term" element={<TermsConditions />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
