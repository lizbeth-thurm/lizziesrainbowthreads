import "./App.css";
import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <h1>Lizzie's Rainbow Threads</h1>
        <h3>Pride-Themed Accessories and Apparel</h3>
        <h3>Custom Tailoring and Alterations Specializing in Clothes for Trans People!</h3>
        <h2 className="about">ABOUT</h2>
        <h2 className="social">SOCIAL</h2>
        <h2 className="contact">CONTACT</h2>
      </div>
    </div>
  );
}

export default App;
