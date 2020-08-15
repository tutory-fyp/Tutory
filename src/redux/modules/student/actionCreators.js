import {
    INIT_STATE,
    SET_IS_LOADING,
} from './actionTypes';

const initState = () => {
    return {
        type: INIT_STATE,
    }
}

const setIsLoading = (isLoading) => {
    return {
        type: SET_IS_LOADING,
        payload: isLoading,
    }
}

export {
    setIsLoading,
};