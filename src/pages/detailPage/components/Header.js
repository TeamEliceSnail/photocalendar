import HeaderStyle from './HeaderStyle';
import { BsThreeDots } from 'react-icons/bs';
import Modal from '../../../common/components/modal';
import { useState } from 'react';
const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <HeaderStyle>
                <div className="date">3일의 기록</div>
                <BsThreeDots size={30} className="menu" onClick={openModal} />
            </HeaderStyle>
            <Modal open={modalOpen} close={closeModal} header="Modal heading">
                {/* // Modal.js <main> {props.children} </main>에 내용이 입력된다. */}
                리액트 함수형 모달 팝업창입니다. 쉽게 만들 수 있어요. 같이
                만들어봐요!
            </Modal>
        </>
    );
};

export default Header;
