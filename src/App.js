import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";

import PageNotFaound from "./components/PageNotFaound.js";
import Header from "./Header.js";

export const userContext = React.createContext();

function App() {
  let API_KEY = "dA3DtWk1vgVeod5cG7yXeTJvVfqAFmBI";

  return (
    <div className="App">
      <Header />
      <userContext.Provider
        value={{
          API_KEY,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFaound />} />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
