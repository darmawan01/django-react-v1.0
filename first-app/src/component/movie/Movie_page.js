import { Router, Switch, Route, Redirect } from 'react-router-dom'
import React from 'react'
import AddMovie from './Add_movie'
import ListMovie from './List_movie'
import DeatilMovie from './Detail_movie'
import {history} from '../../history'


class MoviePage extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/movie/list" component={ListMovie} />
                        <Route path="/movie/add" component={AddMovie} />
                        <Route path="/movie/deatil/:id" component={DeatilMovie} />
                        <Redirect from="/movie" to="/movie/list" />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MoviePage;