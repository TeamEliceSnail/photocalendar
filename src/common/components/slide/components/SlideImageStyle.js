import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3vh;
    .btn {
        all: unset;
        /* padding: 0.5em 2em; */
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-in-out;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
        }
        /* position: absolute; */
    }
    /* .prevBtn {
        left: 85px;
        top: 50px;
    }

    .nextBtn {
        left: 20px;
        top: 50px;
    } */
    .slideContainer {
        position: relative;
        height: 70vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }
    .slider {
        height: 100%;
        display: flex;
        text-align: center;
    }
`;
