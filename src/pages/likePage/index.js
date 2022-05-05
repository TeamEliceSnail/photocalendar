import React from 'react';
import Wrapper from './style';
import LikeItem from './components/LikeItem';

const LikePage = () => {
    return (
        <Wrapper>
            <div id="like-item-container">
                {Array.from({ length: 20 }).map(() => (
                    <LikeItem />
                ))}
            </div>
        </Wrapper>
    );
};

export default LikePage;
