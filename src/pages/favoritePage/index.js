import React from 'react'
import Wrapper from './style'
import LikeItem from './components/likeItem'

const FavoritePage = () => {
    return (
        <Wrapper>
            <div id="like-item-container">
                {Array.from({length: 20}).map(() =><LikeItem/>)}
            </div>
        </Wrapper>
    )
}

export default FavoritePage