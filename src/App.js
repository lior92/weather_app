import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Favorite from "./components/Favorite.js";
import PageNotFaound from "./components/PageNotFaound.js";
import NavigationBar from "./NavigationBar.js";

export const userContext = React.createContext()


function App() {



let API_KEY = 'dA3DtWk1vgVeod5cG7yXeTJvVfqAFmBI'


  return (
    <div className="App">
<NavigationBar/>
<userContext.Provider value={{
  API_KEY
}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<PageNotFaound />} />
      </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
