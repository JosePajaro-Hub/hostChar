import React from "react";
import ReactDOM from "react-dom/client";
import NotFounfPage from './page/notFound'
import HomePage from "./page/home";
import AboutPage from "./page/about";
import CharacterPage from "./page/character";
import narvBar from "narvBar/navBar"
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/character" element={<CharacterPage />} />
      <Route path="* " element={<NotFounfPage></NotFounfPage>}></Route>
     
    </Routes>
    <div>
        <narvBar></narvBar>
      </div>
  </BrowserRouter>
  
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
