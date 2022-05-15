import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 3vh;
    .btn {
        all: unset;
        border-radius: 10px;
        cursor: pointer;
        &:hover {
            transition: all 0.3s ease-in-out;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
        }
    }
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
