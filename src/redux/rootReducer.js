import userReducer from './modules/user';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: userReducer,
});

export default rootReducer;