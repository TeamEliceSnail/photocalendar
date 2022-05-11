import { useRecoilState } from 'recoil';
import { boardEditState, modalState } from '../../recoil';
import DetailBoard from './components/DetailBoard';
import StyledDetailPage from './style';
import CustomSlide from '../../common/components/slide/index';

// import ControlMenu from './components/ControlMenu';
import Header from './components/Header';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { logDOM } from '@testing-library/react';

// 상세페이지 메인
// 필요 컴포넌트 1. 왼쪽 글,일자, 감정표현 2.슬라이드
const DetailPage = () => {
    const [page, setPage] = useState(0);
    const [modalFlag, setModalFlag] = useRecoilState(modalState);
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);
    const [addFlag, setAddFlag] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { date } = useParams();
    const imgInput = useRef(null);
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const USER_ID = 'aaa';

    const getData = async () => {
        try {
            const res = await axios.get(
                `http://localhost:5030/user/${USER_ID}/date/${date}`
            );
            setLoading((prev) => false);
            setData((prev) => res.data);
        } catch (error) {
            console.log(`상세페이지 데이터 호출 실패 >>> ${error}`);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const postImage = async (formData) => {
        try {
            const res = await axios.post('localhost:5030/sendImg', formData);
            return res.data;
        } catch (error) {
            console.log(`이미지 전송 실패 >>> ${error}`);
        }
    };

    const handlePage = (p) => {
        setPage(p);
    };

    const addBoard = () => {
        data.push({ imgurl: '', title: '', content: '' });
        setData(data);
        setModalFlag(false);
        setAddFlag(true);
        handlePage(data.length - 1);
        setBoardEditFlag(true);
    };

    const confirmBoard = async () => {
        const formData = new FormData();
        formData.append('imageFile', file);

        const res = await postImage(formData);
    };

    const cancelBoard = () => {
        if (addFlag === true) {
            popData();
            handlePage(data.length - 1);
            setAddFlag(false);
        }
        setBoardEditFlag(false);
    };
    const popData = () => {
        data.pop();
        setData(data);
    };
    const modifyBoard = () => {
        setBoardEditFlag(true);
        setModalFlag(false);
    };

    const deleteBoard = () => {};

    const uploadImage = () => {
        imgInput.current.click();
    };

    const onImgChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };
    useEffect(() => {
        let reader,
            isCancel = false;
        if (file) {
            reader = new FileReader();
            reader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setFileDataURL(result);
                }
            };
            reader.readAsDataURL(file);
        }
        return () => {
            isCancel = true;
            if (reader && reader.readyState === 1) reader.abort();
        };
    }, [file]);

    return (
        <>
            <StyledDetailPage>
                <Header addBoard={addBoard} modifyBoard={modifyBoard} />
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <div className="content">
                        <CustomSlide
                            data={data}
                            handlePage={handlePage}
                            page={page}
                            popData={popData}
                            addFlag={addFlag}
                            uploadImage={uploadImage}
                            fileDataURL={fileDataURL}
                        />
                        <DetailBoard
                            data={data}
                            page={page}
                            cancelBoard={cancelBoard}
                            confirmBoard={confirmBoard}
                        />
                    </div>
                )}
                <input
                    ref={imgInput}
                    style={{ display: 'none' }}
                    type="file"
                    accept="image/*"
                    onChange={onImgChange}
                />
            </StyledDetailPage>
        </>
    );
};

export default DetailPage;
