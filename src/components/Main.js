import React, { Component } from 'react';
import asdf from '../lib/backgroundSjurChingChong.png'
import '../App.scss';
import Header from './header'
import Homepage from "./Pages/homepage";

class Main extends Component {

  render() {
    return (
      <body className="App">
      <header className="App-header">
        <img src={asdf} className="App-logo" alt="logo" />
        <p>
          Filip er homo sjalalalalala og aleks er en datahomo
        </p>
        <a
            className="leekspin-link"
            href="https://leekspin.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Sug en filip?
        </a>
        <p> Sjur ER SÅ kul</p>
      </header>

      </body>
    );
  }
}

export default Main;
