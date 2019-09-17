import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import playerReducer from '../components/Snake/player/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    player: playerReducer,
})

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store