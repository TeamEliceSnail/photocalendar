import axios from 'axios';

export const postImg = async (formData) => {
    try {
        const res = await axios({
            method: 'POST',
            url: `/sendImg`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-detailBoardData',
            },
        });
        if (!(res.status < 300)) {
            throw new Error('서버의 상태가 이상합니다.');
        }

        return await res.data.url;
    } catch (error) {
        throw new Error(`request api 호출 에러 ${error.message}`);
    }
};
