import Wrapper from './style';
import modalState from '../../../recoil/modalState';
import { useRecoilState } from 'recoil';

const Modal = ({ header, content }) => {
    const [modalFlag, setModalFlag] = useRecoilState(modalState);

    const handleModal = () => {
        setModalFlag(!modalFlag);
    };
    return (
        <Wrapper modalFlag={modalFlag}>
            <section>
                {content.map((item) => (
                    <div
                        key={item['key']}
                        className="btn"
                        onClick={item['event']}
                    >
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
