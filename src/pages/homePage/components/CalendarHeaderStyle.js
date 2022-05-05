import styled, { keyframes } from 'styled-components';

const upside = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);       
    }
    100% {
        transform: translateY(0px);
    }
`;

const downside = keyframes`
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(15px);       
    }
    100% {
        transform: translateY(0px);
    }
`;

export const Wrapper = styled.header`
    display: flex;
    position: absolute;
    right: -15%;
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .icon_arrow {
        font-size: 5rem;
        cursor: pointer;
        transition: transform infinite;
    }

    .up:hover {
        animation: ${upside} 0.5s infinite;
    }

    .down:hover {
        animation: ${downside} 0.5s infinite;
    }

    .current_date {
        margin: 0;
        margin-bottom: 1rem;
        text-align: center;

        span {
            font-size: 3rem;
        }

        span.highlight_month {
            color: #ff9999;
        }
    }
`;
