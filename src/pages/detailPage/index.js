import { useRecoilState } from 'recoil';

import DetailBoard from './components/DetailBoard';
import StyledDetailPage from './style';
import CustomSlide from '../../common/components/slide/index';

// import ControlMenu from './components/ControlMenu';
import Header from './components/Header';
import { useState } from 'react';

const data = [
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
    const handlePage = (p) => {
        setPage(p);
    };
    return (
        <>
            <StyledDetailPage>
                <Header />
                <div className="content">
                    <DetailBoard data={data} page={page} />
                    <CustomSlide
                        data={data}
                        handlePage={handlePage}
                        page={page}
                    />
                    {/* <SlideImage /> */}
                </div>
            </StyledDetailPage>

            {/* <ControlMenu /> */}
        </>
    );
};

export default DetailPage;
