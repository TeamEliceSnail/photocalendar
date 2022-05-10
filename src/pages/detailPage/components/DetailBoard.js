import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import boardEditState from '../../../recoil/boardEditState';
import Wrapper from './DetailBoardStyle';
import PropTypes from 'prop-types';

const DetailBoard = ({ data, page, cancelBoard }) => {
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    useEffect(() => {
        setTitle(data[page].title || '');
        setContent(data[page].content || '');
    }, [page]);

    return (
        <Wrapper>
            <div id="title">
                {!boardEditFlag ? (
                    title
                ) : (
                    <textarea
                        className="title_textarea"
                        onChange={handleTitle}
                        value={title}
                        placeholder="제목을 입력하세요."
                    />
                )}
            </div>
            <div id="content">
                {!boardEditFlag ? (
                    content
                ) : (
                    <textarea
                        className="content_textarea"
                        onChange={handleContent}
                        value={content}
                        placeholder="내용을 입력하세요."
                    />
                )}
            </div>
            <div id="btn_detail_confirm_cancle">
                {!boardEditFlag ? null : (
                    <>
                        <button onClick={cancelBoard}>확인</button>
                        <button onClick={cancelBoard}>취소</button>
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default DetailBoard;

DetailBoard.defaultProps = {
    data: [
        {
            url: 'images/picture01.jpg',
            title: '없음',
            content: '없음',
        },
    ],
};

DetailBoard.propTypes = {
    data: PropTypes.array,
};
