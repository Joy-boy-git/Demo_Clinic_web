import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import App from "./App";
import GeneralConsult from "./GeneralCosult";
import Footer from "./Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
     
    <Footer />
  </BrowserRouter>
);