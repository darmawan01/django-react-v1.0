import * as types from '../actions/ActionsType';

const initialState = {
    movies: []
}
export function moviewReducer(state = initialState.movies, action) {
    switch (action.type) {
        case types.ALL_MOVIE:
            console.log(action)
            return action.data;

        case types.ADD_MOVIE:
            let movie = state
            movie.push(action.data)

            return movie;

        case types.UPDATE_MOVIE:
            return [
                action.data,
                ...state.filter(data => data.id !== action.id)
            ]

        case types.DELETE_MOVIE:
            return [
                ...state.filter(data => data.id !== action.id)
            ]

        default:
            return state
    }
}
