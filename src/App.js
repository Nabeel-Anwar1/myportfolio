import "./App.css";
import HomePage from "./components/home/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LearnCutchi from "./components/projects/LearnCutchi";
import SnookerScorer from "./components/projects/SnookerScorer";
import { useLayoutEffect, useEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);
  return children;
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sect-animation");
        } else {
          entry.target.classList.remove("sect-animation");
        }
      });
    });
    const viewbox = document.querySelectorAll(".sect");
    viewbox.forEach((image) => {
      observer.observe(image);
    });
  }, []);

  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LearnCutchi" element={<LearnCutchi />} />
          <Route path="/SnookerScorer" element={<SnookerScorer />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
