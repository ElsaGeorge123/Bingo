import React, { useContext, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Occassions from "./pages/Occassions";
import Numbers from "./pages/Numbers";
import CustomizeCard from "./pages/CustomizeCard";
import BingoGen from "./components/BingoGen";
import GlobalContext from "./Context/GlobalContext";
import { useContextData } from "./Context/useContext";
import VirtualBingoPage from "./components/VirtualBingo/VirtualBingoPage";
import CreateSession from "./components/VirtualBingo/CreateSession";

const Wrapper = () => {
  const { occassion } = useContext(GlobalContext);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/numbers" element={<Numbers />} />
          <Route path="/occassions" element={<Occassions />} />
          <Route path="/CustomizeCard" element={<CustomizeCard />} />
          <Route path="/VirtualBingo" element={<VirtualBingoPage />} />
          <Route path="/CreateSession" element={<CreateSession />} />
          
          <Route
            path="/bingogen"
            element={<BingoGen occassion={occassion} />}
          />
        </Routes>
      </Router>
    </>
  );
};

const App = () => {
  const context = useContextData();
  console.log("helo");
  return (
    <GlobalContext.Provider value={context}>
      <Wrapper />
    </GlobalContext.Provider>
  );
};

export default App;
