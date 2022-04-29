import Wrapper from './style';
import modalState from '../../../recoil/modalState';
import { useRecoilState } from 'recoil';
import { GrClose } from 'react-icons/gr';
const Modal = ({ header, content }) => {
    const [modalFlag, setModalFlag] = useRecoilState(modalState);

    const handleModal = () => {
        setModalFlag(!modalFlag);
    };

    return (
        <Wrapper modalFlag={modalFlag}>
            <section>
                {/* <header>
                    {header}
                    <GrClose
                        style={{ cursor: 'pointer' }}
                        className="close"
                        onClick={handleModal}
                    ></GrClose>
                </header> */}
                {content.map((item) => (
                    <div key={item['key']} className="btn">
                        {item['name']}
                    </div>
                ))}
                <div className="closeBtn" onClick={handleModal}>
                    취소
                </div>
            </section>
        </Wrapper>
    );
};

export default Modal;
