import "./App.css";
import React from "react";
import Header from "./components/Header";
import pride_flag from "./pride_flag.png";
import etsy from "./icons/etsy.svg";
import facebook from "./icons/facebook.svg";
import instagram from "./icons/instagram.svg";
import pinterest from "./icons/pinterest.svg";
import twitter from "./icons/twitter.svg";
import mailz from "./mail.gif";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main">
        <div className="Home-intro">
          <h1>Lizzie's Rainbow Threads</h1>
          <h4>Happy Pride Month!</h4>
          <img src={pride_flag} className="pride_flag" alt="Gay Pride Flag" />
          <h3>
            Pride-Themed Accessories and Apparel - Custom Tailoring and
            Alterations Specializing in Clothes for Trans People!
          </h3>
          <h2 className="about" id="about">
            ABOUT
          </h2>
          <div className="about_section">
            <p>Hello and welcome to Lizzie's Rainbow Threads!</p>
            <p>
              My name is Lizzie (She/Her) - I am a seamstress from Arkansas and
              my goal is to spark queer joy through fashion!
            </p>
            <p>
              Lizzie's Rainbow Threads offers the following products and
              services:
            </p>
            <ul>
              <li>Pride-themed bags and other accessories</li>
              <li>Custom apparel</li>
              <li>Cosplay design and alteration</li>
              <li>Any and all tailoring services!</li>
            </ul>
            <p>
              I aim to provide tailoring services in a safe and comfortable
              manner and that celebrates the LGBTQIA+ community!
            </p>
            <p></p>
          </div>
        </div>
        <h2 className="social" id="social">
          SOCIAL
        </h2>
        <div className="icon_list">
          <a href="https://www.etsy.com/shop/LizzieRainbowThreads">
            <img
              src={etsy}
              className="icon"
              alt="Lizzie's Rainbow Threads Etsy Store"
            />
          </a>
          <a href="https://www.facebook.com/lizziesrainbowthreads">
            <img
              src={facebook}
              className="icon"
              alt="Lizzie's Rainbow Threads Facebook Business Page"
            />
          </a>
          <div className="insta_icon">
          <a href="https://www.instagram.com/lizziesrainbowthreads/">
            <img
              src={instagram}
              className="icon"
              alt="Instagram: lizziesrainbowthreads"
            />
          </a>
          </div>
          <a href="https://www.pinterest.com/lizziesrainbowthreads">
            <img src={pinterest} className="icon" alt="My Pinterest" />
          </a>
          <a href="https://twitter.com/lizziesthreads">
            <img
              src={twitter}
              className="icon"
              alt="Twitter: @lizziesthreads"
            />
          </a>
        </div>
        <h2 className="contact" id="contact">
          CONTACT
        </h2>
        <p>
          Feel free to contact me on my social media accounts above or send me
          an email!
        </p>
        <div className="email_add">
          <a href="mailto:lizzie@lizziesrainbowthreads.com">
            <img
              src={mailz}
              className="mail_button"
              alt="I'd love to hear from you! <3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
