import React from "react";

import { Routes, Route, HashRouter } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header/>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
