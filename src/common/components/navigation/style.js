import styled, { keyframes, css } from "styled-components";

const navOn = keyframes`
    from {margin-left: -250px;}
    to {margin-left: 0;}
`;

const navOff = keyframes`
    from {margin-left: 0;}
    to {margin-left: -250px;}
`;

export default styled.nav`
    /* position: fixed; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(243, 243, 243);
    width: 250px;
    height: 100vh;
    animation: ${(props) =>
        props.navFlag
        ? css`
            ${navOn} 0.4s ease-out forwards
            `
        : css`
            ${navOff} 0.4s ease-out forwards
            `};

    & > img {
        position: fixed;
        left: 200px;
        top: 20px;
        width: 25px;
        height: 25px;
        animation: ${(props) =>
        props.navFlag
            ? css`
                ${navOn} 0.4s ease-out forwards
            `
            : css`
                ${navOff} 0.4s ease-out forwards
            `};
        cursor: pointer;
    }

    & > img:hover {
        transform: scale(1.1);
    }
`;
