import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    height: 99%;
    border-bottom: 1px solid #ff9999;

    .weekday {
        height: 7.6%;
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        list-style: none;
        & * {
            display: flex;
            border-bottom: 1px solid #ff9999;
            font-size: 1.875rem;
            justify-content: center;
            align-items: center;
        }
    }

    & > div {
        position: absolute;
        top: 50%;
        left: 52%;
        transform: translate(-50%, -50%);
    }
`;
