import axios from 'axios';

export const updateDetailBoard = async (modify_target_id, data) => {
    try {
        const res = await axios.put(
            `/detailUpdate/${modify_target_id}`,
            JSON.stringify(data),
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (!(res.status < 300)) {
            throw new Error('서버의 상태가 이상합니다.');
        }

        return await res.status;
    } catch (error) {
        throw new Error(`request api 호출 에러 ${error.message}`);
    }
};
