import React, {Component } from 'react';
import Player from './player/player'

class Snake_page extends Component {

    render() {
        return (
            <div className ={"snakeDiv"}>
                <div className = {"gameBorder"}>
                    <Player/>
                </div>
            </div>
        );
    }
}

export default Snake_page;