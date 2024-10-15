import { useState } from "react";
import "./App.css";
import MainDiv from "./Components/MainDiv";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  const [score, setScore] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<MainDiv score={score} setScore={setScore} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
