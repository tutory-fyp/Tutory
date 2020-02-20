import {LOGIN} from './actionTypes';

const addUserID = (userID) => {
    return {
        action: LOGIN,
        payload: userID,
    }
}