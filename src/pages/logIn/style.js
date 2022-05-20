import styled, { keyframes } from 'styled-components';

const upside = keyframes`
    0%,
    100% {
        transform: translateY(0px) ;
    }
    50% {
        transform: translateY(-15px) ;
    }
`;

export default styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-repeat: repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    img:hover {
        animation: ${upside} 0.7s infinite;
    }
    transition: 5ms;
`;
