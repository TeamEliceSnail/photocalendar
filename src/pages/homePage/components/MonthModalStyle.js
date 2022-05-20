import styled, { keyframes } from 'styled-components';

const on = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.8);

    div {
        display: flex;
        position: absolute;
        top: 50%;
        right: 12%;
        width: 15.625rem;
        height: 15.625rem;
        background-color: white;
        border: 1px solid black;
        border-radius: 1.875rem;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        animation: ${on} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    div section {
        display: flex;
        width: 12.5rem;
        justify-content: space-evenly;
    }

    .icon_close {
        position: absolute;
        top: 2.5%;
        right: 2.5%;
        font-size: 30px;
        cursor: pointer;
        transition: transform 0.5s ease;
    }

    .icon_close:hover {
        transform: rotate(90deg);
    }

    input[type='number'] {
        height: 1.25rem;
        width: 4.6875rem;
        padding-bottom: 0.625rem;
        border: none;
        border-bottom: 1px solid #ff9999;
        text-align: center;
        font-size: 1.75rem;
        outline: none;
    }

    button {
        width: 5.625rem;
        height: 3.125rem;
        padding: 0;
        border: none;
        border: 1px solid #ff9999;
        border-radius: 1.25rem;
        font-size: 1.75rem;
        background-color: transparent;
        cursor: pointer;
        transition: background-color 0.5s ease;
    }

    button:hover {
        background-color: #ff9999;
        color: white;
    }
`;
