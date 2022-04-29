import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* background-color: pink; */
    width: 200px;
    height: 50%;

    & > #profile-container > img {
        width: 140px;
        height: 140px;
        border-radius: 500px;
    }

    & > #nickname-container {
        font-size: 25px;
        font-style: italic;
    }

    & > #email-container {
        font-size: 15px;
        color: gray;
    }
`;
