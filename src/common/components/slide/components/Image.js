import React from 'react';
import { ImgStyle, AddImgStyle } from './ImageStyle';

const Slide = ({ imgurl, uploadImage, fileDataURL }) => {
    const handleSlide = () => {
        uploadImage();
    };

    return imgurl ? (
        <ImgStyle src={imgurl} />
    ) : (
        <AddImgStyle
            src={
                fileDataURL
                    ? fileDataURL
                    : `${process.env.PUBLIC_URL}/images/add_Btn3.png`
            }
            onClick={() => handleSlide()}
        />
    );
};

export default Slide;
