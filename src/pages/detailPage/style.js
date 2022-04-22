import styled from "styled-components";

export default styled.div`
    /* background-color: rgba(240, 240, 240, 10); */
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
        content: "";
    }
    /* height: 100vh; */
    display: flex;
    /* display: grid; */
    /* grid-template-columns: 1fr 1fr;
    gap: 10px 20px; */
    justify-content: space-evenly;
`;
