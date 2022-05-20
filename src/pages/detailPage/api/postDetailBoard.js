import axios from 'axios';

export const postDetailBoard = async (data) => {
    try {
        const res = await axios.post(`/detailPost`, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!(res.status < 300)) {
            throw new Error('서버의 상태가 이상합니다.');
        }

        return await res.ok;
    } catch (error) {
        throw new Error(`request api 호출 에러 ${error.message}`);
    }
};
