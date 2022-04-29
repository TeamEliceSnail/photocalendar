import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from './likeItemStyle'
import favoriteImg from '../../../common/img/favorite.png'

const LikeItem = () => {
    const calcImgSize = () =>{
        let img = new Image()
        img.src = favoriteImg
        return img.width > img.height ? "w" : 'h'
    }

    return (
        <Wrapper>
            <div id="img-container"><img src={favoriteImg} alt="" /></div>
            <div id="detail-container">
                <div id="detail-date">2022.04.27</div>
                <div id="detail-content">정신차려 정진우l not a destination. Doesn’t matter which road you take, as long as you get to your destination.</div>
            </div>
        </Wrapper>
  )
}

export default LikeItem