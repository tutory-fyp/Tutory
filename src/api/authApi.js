import axios from 'axios';

const API_KEY = 'AIzaSyBe_PbSo0jZzoWAD9lCfFySAz9mq7DpZxk';

export default axios.create({
    baseURL: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    }
});



