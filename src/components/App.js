import React, { Component } from 'react';

//components
import Header from './header'
import Homepage from './Pages/homepage'

//includes
//import asdf from '../asdf.png'
import '../App.scss';

class App extends Component {

  render() {
    return (
        <div className={"App"}>
            <Header/>
            <Homepage/>
        </div>
    );
  }
}

export default App;
