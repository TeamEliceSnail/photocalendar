import { Wrapper } from './DayStyle';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getRouteString, isNowDate } from '../utils/calendarContainerUtil';
import { useRef } from 'react';

export const DayComponent = ({ informationDay }) => {
    const article = informationDay.article;
    const { year, month, date } = informationDay;
    const detailPageRoute = getRouteString(year, month, date);
    const imgRef = useRef(null);

    function noImage() {
        imgRef.current.src = require('../img/snail_small.png');
        imgRef.current.className = 'noimage';
    }

    return (
        <Wrapper
            styledCount={informationDay.day}
            className={`${informationDay.state} ${isNowDate(
                informationDay
            )}`.trim()}
        >
            <Link to={detailPageRoute}>
                <p className="date">{informationDay.date}</p>
                {article && (
                    <>
                        {article[0].like ? (
                            <AiFillHeart className="like" />
                        ) : (
                            <AiOutlineHeart className="like" />
                        )}

                        <div className="article">
                            <img
                                src={article[0].imgurl}
                                alt="article"
                                decoding="sync"
                                loading="lazy"
                                className="active"
                                onError={noImage}
                                ref={imgRef}
                            />
                            <p className="title">{article[0].title}</p>
                        </div>
                    </>
                )}
            </Link>
        </Wrapper>
    );
};
