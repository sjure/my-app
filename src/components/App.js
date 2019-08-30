import React, { Component } from 'react';

//components
import Header from './header'
import Homepage from './Pages/homepage'

//includes
//import asdf from '../asdf.png'
import '../App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: Homepage,

        }
    }

  render() {
    return (
        <div className={"App"}>
            <Header/>
            <this.state.currentPage/>
        </div>
    );
  }
}

export default App;
