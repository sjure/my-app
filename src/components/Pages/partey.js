import React, { Component } from 'react';
import Laser from '../divPageComp/laser'

class Partey extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className ={"bodyPartey"}>
                <div className={"parteyWrap"}>
                    <Laser/>
                </div>
                <div className={"leftLaserWrap"}>
                     <Laser/>
                </div>
                <div className={"rightLaserWrap"}>
                    <Laser/>
                </div>
            </div>
        );
    }
}

export default Partey;