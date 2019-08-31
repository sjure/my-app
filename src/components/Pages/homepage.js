import React, { Component } from 'react';
import Laser from "../divPageComp/laser"

class Homepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            laser : false
        }
    }
    handleLaserButtonClick(){
        this.setState({laser:!this.state.laser});
        let laserBeams = document.getElementsByClassName("laser-beam");
        for (let i = 0; i< laserBeams.length;i++){
            laserBeams[i].style.visibility = ((!this.state.laser) ? "visible" : "hidden");
        }
    }
    render() {
        return (
            <div className ={"homepage"}>
                <div className={"Wrap2"}>
                    <button className={"laserButton"} onClick={() => this.handleLaserButtonClick()}> LASER LASER BABY </button>
                </div>
                <div className={"Wrap"}>
                    <Laser/>
                </div>
            </div>
        );
    }
}

export default Homepage;