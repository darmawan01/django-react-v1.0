import Movie from '../api/movie';
import {ALL_MOVIE,ADD_MOVIE,UPDATE_MOVIE,DELETE_MOVIE} from './ActionsType';

export function all_movie(){
    return function(dispatch){
        return Movie.allMovie().then(res => {dispatch(all_movie_succes(res))});
    } 
}
export function add_movie(data){
    return function(dispatch){
        return Movie.addMovie(data).then(res => {dispatch(add_movie_succes(res))});
    } 
}
export function update_movie(id,data){
    return function(dispatch){
        return Movie.updateMovie(id,data).then(res => {dispatch(update_movie_succes(res.movie,id))});
    } 
}
export function delete_movie(id){
    return function(dispatch){
        return Movie.deleteMovie(id).then(res => {dispatch(delete_movie_succes(id))});
    } 
}

export function all_movie_succes(data){
    return {
        type: ALL_MOVIE,
        data
    }
}
export function add_movie_succes(data){
    return {
        type: ADD_MOVIE,
        data
    }
}
export function update_movie_succes(data,id){
    return {
        type: UPDATE_MOVIE,
        data,
        id
    }
}
export function delete_movie_succes(id){
    return {
        type: DELETE_MOVIE,
        id
    }
}




