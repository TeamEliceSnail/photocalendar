import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 18vh;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid #ff9999;
    }

    & a {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr 8fr;
        font-size: 1.65rem;
        text-decoration: none;
        cursor: default;
    }

    &.previous,
    &.next {
        opacity: 0.5;
    }

    &.now {
        background-color: #ffebcc;
    }

    & p {
        color: ${({ styledCount }) =>
            styledCount === 0 ? 'red' : styledCount === 6 ? 'blue' : 'black'};
        padding: 0;
        margin: 0;

        &.title {
            text-align: center;
            font-size: 1.2rem;
            color: black;
        }

        &.date {
            justify-self: center;
        }
    }

    & .like {
        position: relative;
        top: 0%;
        right: 0%;
        padding-top: 2px;
        padding-left: 2px;
        color: #ff9999;
        justify-self: start;
        z-index: -1;
    }

    & div {
        grid-row: 2/3;
        grid-column: 1/3;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 100%;
        height: 115px;
        object-fit: contain;

        &.active:hover {
            transition: all 0.5s 1s ease;
            transform: scale(3);
        }

        &.noimage {
            width: 80%;
        }
    }
`;
