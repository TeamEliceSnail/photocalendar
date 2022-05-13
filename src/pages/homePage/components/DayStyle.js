import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 18vh;

    & a {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 4fr 1fr;
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
    }

    & p.title {
        text-align: center;
        font-size: 1rem;
        color: black;
    }

    & .like {
        top: 0%;
        right: 0%;
        position: relative;
        color: #ff9999;
    }

    & div {
        grid-row: 2/3;
        grid-column: 1/3;
        display: inline-block;
    }

    /* & .article {
    }

    & .no_article {
        width: 100%;
        height: 100%;
    } */

    img {
        width: 190px;
        height: 100px;
        object-fit: contain;
    }
`;
