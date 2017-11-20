import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from './component/index'
import {history} from './history'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import * as movieActions from './actions/MovieAction'

class App extends React.Component {
    
    componentWillMount(){
        this.props.action.all_movie();
    }

    render() {
        return (
            <Router history={history} >
                <Switch>
                    <Route path="/movie" component={IndexPage   } />
                    <Redirect from="/" to="/movie"/>
                </Switch>
                
            </Router>
        )
    }
}

// function mapState(state){
//     return {
//         movies: state.movies
//     }
// }

function mapDispatch(dispatch){
    return{
        action: bindActionCreators(movieActions, dispatch)
    }
}

export default connect(null, mapDispatch)(App)