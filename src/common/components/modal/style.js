import styled from 'styled-components';
import { keyframes, css } from 'styled-components';

const modalOn = keyframes`
    /* @keyframes modal-show { */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;

        }
    /* } */
`;

const modalOff = keyframes`
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
`;

export default styled.div`
    display: ${(props) => (props.modalFlag ? 'flex' : 'none')};
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);

    & > section {
        width: 90%;
        max-width: 450px;
        margin: 0 auto;
        border-radius: 0.8rem;
        background-color: #fbffe2;
        /* 팝업이 열릴때 스르륵 열리는 효과 */
        animation: ${modalOn} 0.3s ease-out;
        overflow: hidden;
        height: 50vh;
        width: 40vh;
    }

    .btn {
        margin-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        /* border: solid; */
        cursor: pointer;
    }
    .btn:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
    .closeBtn {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
        /* border: solid; */
        cursor: pointer;
    }
    .closeBtn:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;
