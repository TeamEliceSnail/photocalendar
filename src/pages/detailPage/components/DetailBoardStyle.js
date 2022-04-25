import styled from "styled-components";

export default styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;

    padding: 5%;
    justify-content: center;
    align-items: center;
    height: 80%;

    & > #title {
        margin: 5vh;
        background-color: gray;
        width: 90vh;
        font-size: 50px;
    }

    & > #content {
        margin: 3vh;
        font-size: 25px;
        background-color: gray;
        height: 50vh;
        width: 90vh;
    }
`;
