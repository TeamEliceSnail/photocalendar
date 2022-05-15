import { useRecoilState } from 'recoil';
import { boardEditState, modalState } from '../../recoil';
import DetailBoard from './components/DetailBoard';
import StyledDetailPage from './style';
import CustomSlide from '../../common/components/slide/index';

// import ControlMenu from './components/ControlMenu';
import Header from './components/Header';
import { useState } from 'react';

const obj = [
    {
        url: 'images/picture02.jpg',
        title: '안녕.',
        content: '나는 산이야.',
    },
    {
        url: 'images/picture01.jpg',
        title: '메롱.',
        content: 'ㅎㅎㅎㅎ',
    },
    {
        url: 'images/picture03.jpg',
        title: '메롱.',
        content: 'ㅋㅋㅋ',
    },
];

// 상세페이지 메인
// 필요 컴포넌트 1. 왼쪽 글,일자, 감정표현 2.슬라이드
const DetailPage = () => {
    const [page, setPage] = useState(0);
    const [modalFlag, setModalFlag] = useRecoilState(modalState);
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);
    const [addFlag, setAddFlag] = useState(false);
    const [data, setData] = useState(obj);

    const handlePage = (p) => {
        setPage(p);
    };

    const addBoard = () => {
        data.push({ url: '', title: '', content: '' });
        setData(data);
        setModalFlag(!modalFlag);
        setAddFlag(!addFlag);
        handlePage(data.length - 1);
        setBoardEditFlag(!boardEditFlag);
    };
    const cancelBoard = () => {
        if (addFlag) {
            popData();
            handlePage(data.length - 1);
            setAddFlag(!addFlag);
        }
        setBoardEditFlag(!boardEditFlag);
    };
    const popData = () => {
        data.pop();
        setData(data);
    };
    const modifyBoard = () => {
        setBoardEditFlag(!boardEditFlag);
        setModalFlag(!modalFlag);
    };

    const deleteBoard = () => {};

    return (
        <>
            <StyledDetailPage>
                <Header addBoard={addBoard} modifyBoard={modifyBoard} />
                <div className="content">
                    <CustomSlide
                        data={data}
                        handlePage={handlePage}
                        page={page}
                        popData={popData}
                        addFlag={addFlag}
                    />
                    <DetailBoard
                        data={data}
                        page={page}
                        cancelBoard={cancelBoard}
                    />
                </div>
            </StyledDetailPage>
        </>
    );
};

export default DetailPage;
