import React, { Component } from 'react';

class Laser extends Component {

    render() {
        return (
            <div className={"laserContainer"}>
                <div className="laser-beam"/>
                <div className="laser-beam red"/>
                <div className="laser-beam purple"/>
                <div className="laser-beam green"/>
            </div>
        )
    }
}

export default Laser;