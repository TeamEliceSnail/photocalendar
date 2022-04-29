import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${({ dayCount }) => (dayCount === 0 ? 'red' : dayCount === 6 ? 'blue' : 'black')};
    font-size: 1.3rem;

    &.previous,
    &.next {
        opacity: 0.5;
    }

    &.now {
        background-color: #ffebcc;
    }
`;
