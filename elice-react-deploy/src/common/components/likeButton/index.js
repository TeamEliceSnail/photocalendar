import React, { useState } from 'react'
import likeImg from '../../img/pinkheart.png'
import dislikeImg from '../../img/whiteheart.png'

import Wrapper from './style';

const LikeBtn = () => {
    const [likeBtnflag, setLikeBtnFlag] = useState(true)
    
    const LikeBtnOn = () => {
        setLikeBtnFlag(!likeBtnflag)
    }

    const LikeBtnOff = () => {
        setLikeBtnFlag(!likeBtnflag)
    }

    return (
        <Wrapper>
            { likeBtnflag 
                ? <img src={likeImg} alt="" onClick={LikeBtnOff}/>
                : <img src={dislikeImg} alt="" onClick={LikeBtnOn}/>
            }
        </Wrapper>
    )
}

export default LikeBtn