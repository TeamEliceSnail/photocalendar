import { Link } from 'react-router-dom'
import Wrapper from './LikeItemStyle';
import LikeBtn from '../../../common/components/likeButton';

const LikeItem = ({item}) => {
    const date = item.date.substr(0,10)

    return (
        <Wrapper imgSize={item.imgurl}>
            <div id="img-container">
                <img src={item.imgurl} alt="likeimg" />
            </div>
            <div id="detail-container">
                <div id="detail-header">
                    <div id="detail-date">{date.replace(/-/g, '.')}</div>
                    <div id="like-btn"><LikeBtn/></div>
                </div>
                <div id="detail-body">{item.content}</div>
            </div>
        </Wrapper>
    );
};

export default LikeItem;