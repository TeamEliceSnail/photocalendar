import axios from 'axios';

export const getDetailAllBoard = async (date) => {
    try {
        const res = await axios.get(`/user/${date}`);

        if (!(res.status < 300)) {
            throw new Error('서버의 상태가 이상합니다.');
        }

        return await res;
    } catch (error) {
        throw new Error(`request api 호출 에러 ${error.message}`);
    }
};
