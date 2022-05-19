import React from 'react';
import { ImgStyle, AddImgStyle } from './ImageStyle';
import { useRecoilState } from 'recoil';
import { boardEditState } from '../../../../recoil';

const Slide = ({ imgurl, uploadImage, fileDataURL }) => {
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);

    const handleSlide = () => {
        uploadImage();
    };

    return imgurl ? (
        boardEditFlag ? (
            <AddImgStyle
                src={fileDataURL || imgurl}
                onClick={() => handleSlide()}
            />
        ) : (
            <ImgStyle src={imgurl} />
        )
    ) : (
        <AddImgStyle
            src={fileDataURL || `${process.env.PUBLIC_URL}/images/add_Btn3.png`}
            onClick={() => handleSlide()}
        />
    );
};

export default Slide;
