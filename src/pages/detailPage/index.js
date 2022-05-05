import { useRecoilState } from 'recoil';

import DetailBoard from './components/DetailBoard';
import StyledDetailPage from './style';
import CustomSlide from '../../common/components/slide/index';

// import ControlMenu from './components/ControlMenu';
import Header from './components/Header';

// 상세페이지 메인
// 필요 컴포넌트 1. 왼쪽 글,일자, 감정표현 2.슬라이드
const DetailPage = () => {
    return (
        <>
            <StyledDetailPage>
                <Header />
                <div className="content">
                    <DetailBoard />
                    <CustomSlide />
                    {/* <SlideImage /> */}
                </div>
            </StyledDetailPage>

            {/* <ControlMenu /> */}
        </>
    );
};

export default DetailPage;
