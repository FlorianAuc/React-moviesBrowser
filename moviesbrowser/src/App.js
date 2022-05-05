import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Style from "./pages/Style";
import Mylist from "./pages/Mylist";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Style" element={<Style />}></Route>
        <Route path="/Mylist" element={<Mylist />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
