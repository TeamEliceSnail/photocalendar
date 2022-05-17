import { useState, useEffect } from 'react';

import Wrapper from './LikeItemStyle';
import LikeBtn from '../../../common/components/likeButton';
import favoriteImg from '../../../common/img/favorite.png';

const LikeItem = ({item}) => {
    const calcImgSize = () => {
        let img = new Image();
        img.src = favoriteImg;
        return img.width > img.height ? 'w' : 'h';
    };


    return (
        <Wrapper>
            <div id="img-container">
                <img src={item.imgurl} alt="likeimg" />
            </div>
            <div id="detail-container">
                <div id="detail-header">
                    <div id="detail-date">{item.date}</div>
                    <div id="like-btn"><LikeBtn/></div>
                </div>
                <div id="detail-body">
                    {item.content}
                </div>
            </div>
        </Wrapper>
    );
};

export default LikeItem;