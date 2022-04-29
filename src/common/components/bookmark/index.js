import React, { useState } from 'react'
import flagOnImg from '../../img/pinkheart.png'
import flagOffImg from '../../img/whiteheart.png'

// POST
// key: queryString or mapkey

// GET
// homepage => 불러올 때 가져와야지
// detailpage => 불러올 때 가져와야지

// 이미 눌렀는데? 이미 눌렀습니다 떠야함
// {key, bookMark}
const BookMark = () => {
    const [bookMarkflag, setBookMarkFlag] = useState(true) // bookMark로 변경
    
    const bookMarkOn = () => {
        setBookMarkFlag(!bookMarkflag)
    }

    const bookMarkOff = () => {
        setBookMarkFlag(!bookMarkflag)
    }

    return (
        <div>
            { bookMarkflag 
                ? <img src={flagOnImg} alt="" onClick={bookMarkOff}/>
                : <img src={flagOffImg} alt="" onClick={bookMarkOn}/>
            }
        </div>
    )
}

export default BookMark