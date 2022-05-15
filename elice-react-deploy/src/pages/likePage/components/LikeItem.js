import { useState } from 'react';

import Wrapper from './LikeItemStyle';
import LikeBtn from '../../../common/components/likeButton';

import favoriteImg from '../../../common/img/favorite.png';

const LikeItem = () => {

    const calcImgSize = () => {
        let img = new Image();
        img.src = favoriteImg;
        return img.width > img.height ? 'w' : 'h';
    };

    return (
        <Wrapper>
            <div id="img-container">
                <img src={favoriteImg} alt="" />
            </div>
            <div id="detail-container">
                <div id="detail-header">
                    <div id="detail-date">2022.04.27</div>
                    <div id="like-btn"><LikeBtn/></div>
                </div>
                <div id="detail-body">
                    Remember that happiness is a way of travel not a
                    destination. Doesn’t matter which road you take, as long as
                    you get to your destination.
                </div>
            </div>
        </Wrapper>
    );
};

export default LikeItem;