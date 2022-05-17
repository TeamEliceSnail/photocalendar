import styled from "styled-components";

export default styled.div`
    display: flex;
    width: 100%;
    height: 40px;
    margin-bottom: 4px;
    align-items: center;
    justify-content: center;
    background-color: rgb(152 176 171);
    text-decoration: none;

    & > #nav-button-icon > img {
        width: 20px;
    }

    & > #nav-button-title {
        width: 100px;
        margin-left: 10px;
    }
`;