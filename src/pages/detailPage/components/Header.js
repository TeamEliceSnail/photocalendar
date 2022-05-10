import HeaderStyle from './HeaderStyle';
import { BsThreeDots } from 'react-icons/bs';
import Modal from '../../../common/components/modal';
import { useRecoilState } from 'recoil';
import modalState from '../../../recoil/modalState';
import { useParams } from 'react-router-dom';
const Header = ({ addBoard, modifyBoard }) => {
    const [modalFlag, setModalFlag] = useRecoilState(modalState);
    const { date } = useParams();
    const handleOpenModal = () => {
        setModalFlag(!modalFlag);
    };
    const content = [
        { name: '추가', key: 'c', event: addBoard },
        { name: '수정', key: 'u', event: modifyBoard },
        { name: '삭제', key: 'd' },
    ];

    return (
        <>
            <HeaderStyle>
                <div className="date">
                    {`${date.substring(4, 6)}월 ${date.substring(6, 8)}일`}
                </div>
                <BsThreeDots
                    size={30}
                    className="menu"
                    onClick={handleOpenModal}
                />
            </HeaderStyle>
            <Modal header={'헤더'} content={content}></Modal>
        </>
    );
};

export default Header;
