const BASE_URL ="http://localhost:8085/service/movie";

class Movie {
    static allMovie(){
        return fetch (`${BASE_URL}/list`).then(res => res.json()).catch(er => er);
    }
    static addMovie(data){
        return fetch (`${BASE_URL}/create`,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).catch(er => er);
    }

    static updateMovie(id,data){
        return fetch (`${BASE_URL}/update/${id}`,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).catch(er => er);
    }

    static deleteMovie(id){
        return fetch (`${BASE_URL}/delete/${id}`,{
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => res.json()).catch(er => er);
    }
}

export default Movie;