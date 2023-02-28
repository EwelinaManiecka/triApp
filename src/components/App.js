import { Routes, Route } from "react-router-dom";
// import { lazy } from "react";

import Home from "../routes/HomePage";
import About from "../routes/AboutPage";
import Service from "../routes/ServicePage";
import Contact from "../routes/ContactPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
