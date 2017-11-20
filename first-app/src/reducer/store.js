import reducers from './root_reducer'
import {applyMiddleware, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk';

const createStoreMidleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreMidleware(reducers);

export default store;
