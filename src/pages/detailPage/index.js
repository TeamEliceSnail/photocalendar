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
import {
    deleteDetailBoard,
    getDetailAllBoard,
    postDetailBoard,
    postImg,
    updateDetailBoard,
} from './api';
import Loading from '../../common/components/loading';

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

    const getData = async () => {
        try {
            const res = await getDetailAllBoard(date);
            setTimeout(() => setLoading((prev) => false), 800);
            setDetailBoardData((prev) => res.data);
            if (res.data.length !== 0) setBoardEditFlag((prev) => false);
            else if (res.data.length === 0) setBoardEditFlag((prev) => true);
        } catch (error) {
            console.log(`상세페이지 데이터 호출 실패 >>> ${error}`);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const handlePage = (p) => {
        p = p < 0 ? 0 : p;
        setPage(p);
    };

    const addBoard = () => {
        detailBoardData.push({
            imgurl: '',
            title: '',
            content: '',
            like: false,
        });
        setDetailBoardData(detailBoardData);
        setModalFlag(false);
        setAddFlag(true);
        handlePage(detailBoardData.length - 1);
        setBoardEditFlag(true);
    };

    const confirmBoard = async () => {
        if (modifyflag) {
            try {
                const data = {};
                let imgurl = '';
                if (file !== null) {
                    const formData = new FormData();
                    formData.append('image', file);

                    imgurl = await postImg(formData);
                    setFile(null);
                    setFileDataURL(null);
                }

                const modify_target_id = detailBoardData[page]._id;

                Object.assign(data, {
                    date: date,
                    like: detailBoardData[page].like,
                    imgurl: imgurl || detailBoardData[page].imgurl,
                    title: document.querySelector('.title_textarea').value,
                    content: document.querySelector('.content_textarea').value,
                });

                await updateDetailBoard(modify_target_id, data);

                await getData();
            } catch (e) {}
        } else {
            try {
                if (file === null) {
                    return;
                }
                const formData = new FormData();
                formData.append('image', file);

                const imgurl = await postImg(formData);

                const data = {
                    imgurl: imgurl,
                    date: date,
                    like: detailBoardData[page].like,
                    title: document.querySelector('.title_textarea').value,
                    content: document.querySelector('.content_textarea').value,
                };

                await postDetailBoard(data);

                setFile(null);
                setFileDataURL(null);
                setAddFlag(false);
                await getData();
            } catch (error) {
                console.log(`데이터 추가 실패 >>> ${error}`);
            }
        }
    };

    const updateLike = async () => {
        try {
            const data = {};
            const modify_target_id = detailBoardData[page]._id;

            Object.assign(data, {
                date: date,
                like: !detailBoardData[page].like,
                imgurl: detailBoardData[page].imgurl,
                title: detailBoardData[page].title,
                content: detailBoardData[page].content,
            });

            await updateDetailBoard(modify_target_id, data);

            await getData();
        } catch (error) {
            console.log(`데이터 추가 실패 >>> ${error}`);
        }
    };

    const cancelBoard = () => {
        if (addFlag === true) {
            handlePage(detailBoardData.length - 2);
            popData();
            setAddFlag(false);
        }
        setFileDataURL(null);
        setFile(null);
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

        await deleteDetailBoard(delete_target_id);

        await getData();
        setPage(page - 1);
        setModalFlag(false);
    };

    const uploadImage = () => {
        imgInput.current.click();
    };

    const onImgChange = (e) => {
        const imgFile = e.target.files[0];
        setFile(imgFile);
    };
    useEffect(() => {
        let reader;
        let isCancel = false;
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
                    <div className="content">
                        <Loading />
                    </div>
                ) : (
                    <div className="content">
                        <CustomSlide
                            detailBoardData={detailBoardData}
                            handlePage={handlePage}
                            page={page}
                            cancelBoard={cancelBoard}
                            addFlag={addFlag}
                            uploadImage={uploadImage}
                            fileDataURL={fileDataURL}
                        />
                        <DetailBoard
                            detailBoardData={detailBoardData}
                            page={page}
                            handlePage={handlePage}
                            cancelBoard={cancelBoard}
                            confirmBoard={confirmBoard}
                            updateLike={updateLike}
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
