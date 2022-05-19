import styled from 'styled-components';
import { keyframes } from 'styled-components';
const enter = keyframes`
  0% {
    transform: scale(0.9);
    
  };
  100% {
    transform: scale(1);
  }
`;

export default styled.div`
    &::before {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: ${(props) => `url(${props.imgUrl})`};
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        -webkit-filter: blur(20px);
        -moz-filter: blur(20px);
        -o-filter: blur(20px);
        -ms-filter: blur(20px);
        filter: blur(20px);
        transform: scale(1.02);
        z-index: -1;
        content: '';
    }

    display: grid;
    grid-gap: 5px;
    place-items: center;
    grid-template-areas:
        'header'
        'content';
    align-items: center;
    justify-content: space-evenly;
    .content {
        width: 90%;
        height: 90%;
        margin: 40px;
        justify-content: space-around;
        display: flex;
        background-color: #fff;
        box-shadow: 4px 4px 10px grey;
        animation: ${enter} 0.55s ease-out;
    }
`;
