import { useState } from 'react';
import { useRecoilState } from 'recoil';
import createBoardState from '../../../recoil/createBoardState';
import Wrapper from './DetailBoardStyle';

const DetailBoard = () => {
    const [createBoard, setCreateBoard] = useRecoilState(createBoardState);
    const [title, setTitle] = useState('TITLE');
    const [content, setContent] = useState(
        'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
    );

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };
    return (
        <Wrapper>
            <div id="title">
                {!createBoard ? (
                    title
                ) : (
                    <textarea onChange={handleTitle} value={title} />
                )}
            </div>
            <div id="content">
                {!createBoard ? (
                    content
                ) : (
                    <textarea onChange={handleContent} value={content} />
                )}
            </div>
        </Wrapper>
    );
};

export default DetailBoard;
