import React from "react";
// import "./App.css";
// import "./css/Main.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/header/Footer";
import About from "./components/views/About";

function App() {
  return (
    <Router>
      <Route path="/" component={About} />
    </Router>
  );
}

export default App;
