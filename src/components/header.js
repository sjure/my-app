import React, { Component } from 'react';
import logo from "../lib/logo.png"

class Header extends Component {
    render() {
        return (
        <header>
            <img className={"logo"} src={logo} alt={""}/>
            <nav>
                <ul>
                    <li>
                        <button className={"blankButton"} onClick={()=> console.log("LINK")}>Tidenes side</button>
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