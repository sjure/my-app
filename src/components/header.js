import React, { Component } from 'react';
import logo from "../lib/logoSjur.png"
import classNames from 'classnames';
import Homepage from "./Pages/homepage";
import SjurSide from './Pages/sjurSide'
import TakkTil from './Pages/takkTil'
import Partey from './Pages/partey'

class Header extends Component {
    constructor(props){
        super(props);
        this.state= {
            logoSpin : false,
        }
    }
    changeLogoState(){
        this.setState({logoSpin:!this.state.logoSpin})
    }
    render() {
        return (
        <header>
            <img className={classNames("logo", this.state.logoSpin ? "spinLogo" : "") } src={logo} alt={""} onClick={()=>this.changeLogoState()}/>
            <nav>
                <ul>
                    <li>
                        <button className={"blankButton"} onClick={()=> this.props.changeState(Homepage)}>Tidenes side</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> this.props.changeState(SjurSide)}>Sjurs side</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> this.props.changeState(TakkTil)}>Takk til</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> this.props.changeState(Partey)}>Party time</button>
                    </li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;