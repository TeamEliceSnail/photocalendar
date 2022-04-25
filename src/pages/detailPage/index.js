import { useRecoilState } from "recoil";
import styled from "styled-components";
import DetailBoard from "./components/DetailBoard";
import SlideImage from "./components/SlideImage";
import StyledDetailPage from "./style";
import backgroundImageUrlState from "./state/backgroundImageUrlState";
import { useEffect } from "react";
// 상세페이지 메인
// 필요 컴포넌트 1. 왼쪽 글,일자, 감정표현 2.슬라이드
const DetailPage = () => {
    const [backgroundImageUrl, setBackgroundImageUrl] = useRecoilState(
        backgroundImageUrlState
    );
    return (
        <StyledDetailPage imgUrl={backgroundImageUrl}>
            <DetailBoard />
            <SlideImage />
        </StyledDetailPage>
    );
};

export default DetailPage;
