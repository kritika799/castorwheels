import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Features from "./Features";
import Header from "./components/Header";
import { Import } from "lucide-react";
import Portfolio from "./Portfolio";
import Blog from "./Blog";

export default function App() {
  return (
    <div className="font-display bg-background-light text-slate-800 antialiased selection:bg-blue-100 selection:text-primary">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />}/>
          <Route path="/Portfolio" element={<Portfolio/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}
