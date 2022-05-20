import React from 'react'
import Wrapper from './style';

const Loading = () => {
    return (
        <Wrapper>
            <div className="loading dot">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    )
}

export default Loading