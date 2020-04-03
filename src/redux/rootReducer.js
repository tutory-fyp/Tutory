import userReducer from './modules/user';
import tutorReducer from './modules/tutor';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    login: userReducer,
    tutor: tutorReducer,
});

export default rootReducer;