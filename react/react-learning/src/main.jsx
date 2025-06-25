import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Body />
    <App />
    <Footer />
  </StrictMode>
);
