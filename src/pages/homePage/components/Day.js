import { Wrapper } from './DayStyle';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { getRouteString, isNowDate } from '../utils/calendarContainerUtil';

export const DayComponent = ({ informationDay }) => {
    const article = informationDay.article;
    const { year, month, date } = informationDay;
    const detailPageRoute = getRouteString(year, month, date);

    return (
        <Wrapper
            styledCount={informationDay.day}
            className={`${informationDay.state} ${isNowDate(
                informationDay
            )}`.trim()}
        >
            <Link to={detailPageRoute}>
                <p>{informationDay.date}</p>
                {article && (
                    <>
                        {article[0].like ? (
                            <AiOutlineHeart className="like" />
                        ) : (
                            <AiFillHeart className="like" />
                        )}

                        <div className="article">
                            <img
                                src={article[0].imgurl}
                                alt=""
                                loading="lazy"
                            />
                            <p className="title">{article[0].title}</p>
                        </div>
                    </>
                )}
            </Link>
        </Wrapper>
    );
};
