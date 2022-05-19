import axios from 'axios';

export async function authorizedStatus() {
    const responseList = {
        Authorized: false,
        TokenUndefined: '/login',
        Unauthorized: '/login',
        TokenExpiredError: '/login',
        JsonWebTokenError: '/login',
    };

    const response = await axios.get('/auth');
    const data = responseList[response.data];
    if (!data) {
        return false;
    }
    return data;
}
