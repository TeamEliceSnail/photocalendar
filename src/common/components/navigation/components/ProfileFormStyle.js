import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 40%;
    margin-top: 40px;
    border-bottom: solid 1.5px black;

    & > #profile-container > img {
        width: 140px;
        height: 140px;
        border-radius: 500px;
        box-shadow: 5px 5px 10px grey
    }

    & > #profile-container > #nickname-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 50px;
        font-size: 25px;
        font-style: italic;
        font-weight: 600;
    }

    & > #profile-container > #email-container {
        font-size: 15px;
        text-align: center;
        color: black;
    }
`;
