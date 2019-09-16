import React, { Component } from 'react';

//components
import Header from './header'
import Homepage from './Pages/homepage'
//includes
import '../App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.changeState = this.changeState.bind(this);
        this.state = {
            currentPage: Homepage,
        }
    }
    changeState(newState) {
        this.setState({currentPage : newState})
    }

  render() {
    return (
        <div className={"App"}>
            <Header changeState={this.changeState}/>
            <this.state.currentPage/>
        </div>
    );
  }
}

export default App;
