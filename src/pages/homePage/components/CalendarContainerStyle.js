import styled, { keyframes } from 'styled-components';

const enter = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  };
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.section`
    display: grid;
    width: 100%;
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(7, 1fr);
    animation: ${enter} 0.55s ease-out;
`;
