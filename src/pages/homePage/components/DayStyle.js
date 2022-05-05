import styled from 'styled-components';

export const Wrapper = styled.div`
    color: ${({ styledCount }) =>
        styledCount === 0 ? 'red' : styledCount === 6 ? 'blue' : 'black'};
    font-size: 1.3rem;

    &.previous,
    &.next {
        opacity: 0.5;
    }

    &.now {
        background-color: #ffebcc;
    }
`;
