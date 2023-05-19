import "./App.css";
import React from "react";
import Header from "./components/Header";
import pride_flag from "./pride_flag.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <div className="Home-intro">
          <h1>Lizzie's Rainbow Threads</h1>
          <h4>LIBERATION THROUGH FASHION</h4>
          <img src={pride_flag} className="pride_flag" alt="Gay Pride Flag" />
          <h3>Pride-Themed Accessories and Apparel - Custom Tailoring and Alterations Specializing in Clothes for Trans
            People!</h3>
          <h2 className="about" id="about">
            ABOUT
          </h2>
          <p>Hello and welcome to Lizzie's Rainbow Threads!</p>
          <p>My name is Lizzie (She/Her) - I am a seamstress from Arkansas and my passion is fueling queer joy!</p>
        </div>
        <h2 className="social" id="social">
          SOCIAL
        </h2>
        <p>
<ul>
  <li>Twitter</li>
  <li>Instagram</li>
  <li>Facebook</li>
  <li>LinkedIn</li>
  <li>Etsy</li>
</ul>
        </p>
        <h2 className="contact" id="contact">
          CONTACT
        </h2>
        <div className="email_add">
          <a href="mailto:lizzie@lizziesrainbowthreads.com">Email</a>
        </div>
      </div>
    </div>
  );
}

export default App;
