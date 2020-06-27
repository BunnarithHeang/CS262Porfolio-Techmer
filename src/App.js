import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from "./components/Route/AllRoute";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <AllRoute />
    </Router>
  );
}

export default App;
