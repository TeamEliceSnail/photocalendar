import React from 'react';
import { ImgStyle, AddImgStyle } from './ImageStyle';

const Slide = ({ imgurl }) => {
    const handleSlide = () => {
        console.log('click');
    };

    return imgurl ? (
        <ImgStyle src={imgurl} />
    ) : (
        <AddImgStyle
            src={`${process.env.PUBLIC_URL}/images/add_Btn3.png`}
            onClick={() => handleSlide()}
        />
    );
};

export default Slide;
