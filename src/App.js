import React from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Home from './components/Home';
import Singlepage from './components/Singlepage';

function App() {
  return <BrowserRouter>
    {/* <Home /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singlepage" element={<Singlepage />} />
    </Routes>
  </BrowserRouter>
}

export default App;
