import Wrapper from './ControlMenuStyle';
import createBoardState from '../../../recoil/createBoardState';
import { useRecoilState } from 'recoil';

const ControlMenu = () => {
    const [createBoard, setCreateBoard] = useRecoilState(createBoardState);

    const handleCreateBoard = () => {
        setCreateBoard(!createBoard);
    };

    return (
        <Wrapper>
            <div onClick={handleCreateBoard}>
                {!createBoard ? `새 글 작성` : `취소`}
            </div>
            <div>수정</div>
            <div>삭제</div>
        </Wrapper>
    );
};

export default ControlMenu;
