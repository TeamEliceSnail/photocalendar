import styled from 'styled-components';

export const Wrapper = styled.main`
    display: grid;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #ff9999;
    grid-template-rows: 50px repeat(5, auto);
    grid-template-columns: repeat(7, 1fr);
    .weekday {
        grid-column: 1 / 8;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        list-style: none;
        & * {
            display: flex;
            border-bottom: 1px solid #ff9999;
            font-size: 24px;
            justify-content: center;
            align-items: center;
        }
    }
`;
