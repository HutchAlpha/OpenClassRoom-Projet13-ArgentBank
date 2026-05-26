import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import userReducer from './reducers/userReducer';

const TodoConnexion = 
{
    name: 'TodoConnexion',

    email: '',
    password: '',

}