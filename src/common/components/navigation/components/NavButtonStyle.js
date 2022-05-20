import styled, { css } from "styled-components";


export default styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    ${({dark}) => 
        dark 
        ? css`background-color: #2c2c2c; color: white`
        : css`background-color: rgb(152 176 171); color: black`
    };

    & > #nav-button-icon > img {
        width: 20px;
    }

    & > #nav-button-title {
        width: 100px;
        margin-left: 10px;
    }
`;