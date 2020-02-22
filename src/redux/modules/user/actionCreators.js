import { 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    INIT_STATE,
} from './actionTypes';

const initState = () => {
    return {
        type: INIT_STATE,
    }
}

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user,
    }
}

const loginFailed = (error) => {
    return {
        type: LOGIN_ERROR,
        payload: error,
    }
}

export {
    loginSuccess,
    loginFailed,
    initState,
}