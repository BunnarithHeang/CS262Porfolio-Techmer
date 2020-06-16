import React from "react";
// import "./App.css";
// import "./css/Main.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/header/Footer";
import Main from "./components/views/Main";
import Home from "./components/views/Home"

function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
