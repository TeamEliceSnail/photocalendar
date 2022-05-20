import styled, { keyframes } from 'styled-components';

const upside = keyframes`
    0%,
    100% {
        transform: translateY(0px) scale(1.2);
    }
    50% {
        transform: translateY(-15px) scale(1.2);
    }
`;

const downside = keyframes`
    0%,
    100% {
        transform: translateY(0px) scale(1.2);
    }
    50% {
        transform: translateY(15px) scale(1.2);       
    }
`;

export const Wrapper = styled.header`
    display: flex;
    width: 10%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon_arrow {
        font-size: 4.8rem;
        cursor: pointer;
        transition: transform infinite;
    }

    .up:hover {
        animation: ${upside} 0.7s infinite;
    }

    .down:hover {
        animation: ${downside} 0.7s infinite;
    }

    .current_date {
        margin: 0;
        margin-bottom: 1rem;
        transition: transform 0.5s ease;
        text-align: center;
        cursor: pointer;

        p {
            font-size: 3rem;
            &.month {
                color: #ff9999;
            }
        }

        &:hover {
            transform: scale(1.3);
        }
    }
`;
