import React, { Component } from 'react';
import logo from "../lib/logo.png"
import classNames from 'classnames';
import Homepage from "./Pages/homepage";

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
                        <button className={"blankButton"} onClick={()=> super.setState({currentPage: Homepage})}>Tidenes side</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> console.log("LINK")}>Sjurs side</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> console.log("LINK")}>Takk til</button>
                    </li>
                    <li>
                        <button className={"blankButton"} onClick={()=> console.log("LINK")}>Neste Side</button>
                    </li>
                </ul>
            </nav>
        </header>
        );
    }
}

export default Header;