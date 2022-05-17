import axios from 'axios';

const responseList = {
    Authorized: false,
    TokenUndefined: '/login',
    Unauthorized: '/login',
    TokenExpiredError: '/login',
    JsonWebTokenError: '/login',
};

export async function authorizedStatus() {
    const response = await axios.get('/auth');
    const data = responseList[response.data];
    if (!data) {
        return false;
    }
    return data;
}
