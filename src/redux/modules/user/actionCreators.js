import { 
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    INIT_STATE,
    SET_USER,
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

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    }
}

export {
    loginSuccess,
    loginFailed,
    initState,
    setUser,
}