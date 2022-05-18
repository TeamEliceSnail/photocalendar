import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import boardEditState from '../../../recoil/boardEditState';
import Wrapper from './DetailBoardStyle';
import PropTypes from 'prop-types';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const DetailBoard = ({
    detailBoardData,
    page,
    handlePage,
    cancelBoard,
    confirmBoard,
    updateLike,
}) => {
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
        if (detailBoardData.length !== 0) {
            setTitle(detailBoardData[page].title);
            setContent(detailBoardData[page].content);
        }
    }, [page]);
    useEffect(() => {
        if (detailBoardData.length === 0) {
            setTitle('');
            setContent('');
        }
    }, [detailBoardData]);

    const handleLike = async () => {
        await updateLike();
    };
    return (
        <Wrapper>
            <div className="likeDiv">
                {detailBoardData[page].like ? (
                    <AiFillHeart
                        className="like"
                        size={30}
                        onClick={handleLike}
                    />
                ) : (
                    <AiOutlineHeart
                        className="like"
                        size={30}
                        onClick={handleLike}
                    />
                )}
            </div>
            <div id="title">
                {!boardEditFlag ? (
                    title
                ) : (
                    <textarea
                        className="title_textarea"
                        onChange={handleTitle}
                        value={title || ''}
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
                        value={content || ''}
                        placeholder="내용을 입력하세요."
                    />
                )}
            </div>
            <div id="btn_detail_confirm_cancle">
                {!boardEditFlag ? null : (
                    <>
                        <button onClick={confirmBoard}>확인</button>
                        {detailBoardData.length !== 0 ? (
                            <button onClick={cancelBoard}>취소</button>
                        ) : null}
                    </>
                )}
            </div>
        </Wrapper>
    );
};

export default DetailBoard;

DetailBoard.defaultProps = {
    detailBoardData: [],
};

DetailBoard.propTypes = {
    detailBoardData: PropTypes.array,
};
