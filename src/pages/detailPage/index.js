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

// 상세페이지 메인
// 필요 컴포넌트 1. 왼쪽 글,일자, 감정표현 2.슬라이드
const DetailPage = () => {
    const [page, setPage] = useState(0);
    const [modalFlag, setModalFlag] = useRecoilState(modalState);
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);
    const [addFlag, setAddFlag] = useState(false);
    const [detailBoardData, setDetailBoardData] = useState([]);
    const [modifyflag, setModifyflag] = useState(false);
    const [loading, setLoading] = useState(true);
    const { date } = useParams();
    const imgInput = useRef(null);
    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);

    const USER_ID = 'aaa';
    const DEV_URL = 'http://localhost:5030';

    const getData = async () => {
        try {
            const res = await axios.get(
                `${DEV_URL}/user/${USER_ID}/date/${date}`
            );
            setLoading((prev) => false);
            setDetailBoardData((prev) => res.data);
            console.log(res.data);
            if (res.data.length !== 0) setBoardEditFlag((prev) => false);
        } catch (error) {
            console.log(`상세페이지 데이터 호출 실패 >>> ${error}`);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handlePage = (p) => {
        setPage(p);
    };

    const addBoard = () => {
        detailBoardData.push({ imgurl: '', title: '', content: '' });
        setDetailBoardData(detailBoardData);
        setModalFlag(false);
        setAddFlag(true);
        handlePage(detailBoardData.length - 1);
        setBoardEditFlag(true);
    };

    const confirmBoard = async () => {
        if (modifyflag) {
            try {
                const imgUrl = '';
                const modify_target_id = detailBoardData[page]._id;
                const data = {};
                if (file !== null) {
                    const formData = new FormData();
                    formData.append('image', file);

                    const res = await axios({
                        method: 'POST',
                        url: `${DEV_URL}/sendImg`,
                        data: formData,
                        headers: {
                            'Content-Type': 'multipart/form-detailBoardData',
                        },
                    });
                    imgUrl = res.data.data.url;
                    data = { imgurl: imgUrl };
                }

                Object.assign(data, {
                    date: date,
                    like: 'false',
                    title: document.querySelector('.title_textarea').value,
                    content: document.querySelector('.content_textarea').value,
                });

                const jsonStringData = JSON.stringify(data);
                const res2 = await axios.put(
                    `${DEV_URL}/detailUpdate/${modify_target_id}`,
                    jsonStringData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                await getData();
            } catch (e) {}
        } else {
            try {
                if (file === null) {
                    return;
                }
                const formData = new FormData();
                formData.append('image', file);

                const res = await axios({
                    method: 'POST',
                    url: `${DEV_URL}/sendImg`,
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-detailBoardData',
                    },
                });
                const imgUrl = res.data.data.url;
                const data = {
                    imgurl: imgUrl,
                    id_token: USER_ID,
                    date: date,
                    like: 'false',
                    title: document.querySelector('.title_textarea').value,
                    content: document.querySelector('.content_textarea').value,
                };
                const jsonStringData = JSON.stringify(data);
                const res2 = await axios.post(
                    `${DEV_URL}/detailPost`,
                    jsonStringData,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );
                setAddFlag(false);
                await getData();
            } catch (error) {
                console.log(`데이터 추가 실패 >>> ${error}`);
            }
        }
    };

    const cancelBoard = () => {
        if (addFlag === true) {
            popData();
            handlePage(detailBoardData.length - 1);
            setAddFlag(false);
        }
        setBoardEditFlag(false);
    };
    const popData = () => {
        detailBoardData.pop();
        setDetailBoardData(detailBoardData);
    };
    const modifyBoard = () => {
        setModifyflag(true);
        setBoardEditFlag(true);
        setModalFlag(false);
    };

    const deleteBoard = async () => {
        const delete_target_id = detailBoardData[page]._id;
        const res2 = await axios.delete(
            `${DEV_URL}/detailDel/${delete_target_id}`
        );

        if (res2.status === 200) {
            await getData();
            setPage(page - 1);
        } else {
            console.log('delete error');
        }
    };

    const uploadImage = () => {
        imgInput.current.click();
    };

    const onImgChange = (e) => {
        const imgFile = e.target.files[0];
        setFile(imgFile);
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
                <Header
                    addBoard={addBoard}
                    modifyBoard={modifyBoard}
                    deleteBoard={deleteBoard}
                />
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <div className="content">
                        <CustomSlide
                            detailBoardData={detailBoardData}
                            handlePage={handlePage}
                            page={page}
                            popData={popData}
                            addFlag={addFlag}
                            uploadImage={uploadImage}
                            fileDataURL={fileDataURL}
                        />
                        <DetailBoard
                            detailBoardData={detailBoardData}
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
