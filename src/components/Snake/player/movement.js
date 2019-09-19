import store from '../../../config/store'
import {PLAYER_SIZE} from '../../../config/constants'

export default function handleMovement(player){

    function getNewPosition(direction){
        const oldPos = store.getState().player.position;
        switch(direction){
            case "left":
                return [oldPos[0] - PLAYER_SIZE,oldPos[1]];
            case "right":
                return [oldPos[0] + PLAYER_SIZE,oldPos[1]];
            case "up":
                return [oldPos[0],oldPos[1] - PLAYER_SIZE];
            case "down":
                return [oldPos[0],oldPos[1] + PLAYER_SIZE];
            default:
                console.log(direction);
        }
    }

    function dispatchMove(direction){
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }
    function handleKeyDown(e){
        e.preventDefault();
        switch(e.keyCode){
            case 37:
                return dispatchMove("left");
            case 38:
                return dispatchMove("up");
            case 39:
                return dispatchMove("right");
            case 40:
                return dispatchMove("down");
            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener('keydown',(e) =>{
        handleKeyDown(e);
    });
    return player;
}