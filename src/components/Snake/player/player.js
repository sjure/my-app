import React from 'react'
import {connect} from 'react-redux'
import handleMovement from './movement'
import {PLAYER_SIZE} from "../../../config/constants";

function Player(props) {
    return(
        <div className={"snakePlayer"}
             style={{
                 left:props.position[0],
                 top:props.position[1],
                 width: PLAYER_SIZE,
                 height:PLAYER_SIZE,
        }}
        />
    )
}

function mapStateToProps(state){
    return{
        ...state.player
    }
}

export default connect(mapStateToProps)(handleMovement(Player));