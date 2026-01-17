import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Features from "./Features";
import Header from "./components/Header";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Products from "./Products";
import Industries from "./Industries";
import Capabilities from "./Capabilities";
import Form from "./Form";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-display bg-background-light text-slate-800 antialiased selection:bg-blue-100 selection:text-primary">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Industries" element={<Industries />} />
          <Route path="/Capabilities" element={<Capabilities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Form" element={<Form />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
