import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter } from "react-router-dom";
function App() {
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
