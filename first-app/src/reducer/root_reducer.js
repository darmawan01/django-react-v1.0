import {moviewReducer} from './movie_reducer';
import {combineReducers} from 'redux'; 

const reducers = combineReducers({
    movies: moviewReducer
})

export default reducers
