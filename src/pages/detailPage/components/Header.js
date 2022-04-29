import HeaderStyle from './HeaderStyle';
import { BsThreeDots } from 'react-icons/bs';
import Modal from '../../../common/components/modal';
import { useRecoilState } from 'recoil';
import modalState from '../../../recoil/modalState';
const Header = () => {
    const [modalFlag, setModalFlag] = useRecoilState(modalState);

    const handleOpenModal = () => {
        setModalFlag(!modalFlag);
        console.log(modalFlag);
    };
    const content = [
        { name: '추가', key: 'c' },
        { name: '수정', key: 'u' },
        { name: '삭제', key: 'd' },
    ];
    return (
        <>
            <HeaderStyle>
                <div className="date">3일의 기록</div>
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
