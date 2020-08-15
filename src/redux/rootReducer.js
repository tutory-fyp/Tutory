import userReducer from './modules/user';
import tutorReducer from './modules/tutor';
import studentReducer from './modules/student';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  login: userReducer,
  tutor: tutorReducer,
  student: studentReducer,
});

export default rootReducer;
