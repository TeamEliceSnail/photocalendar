import styled from 'styled-components';

export default styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    height: 100%;
    & > #title {
        margin: 5vh;
        background-color: gray;
        width: 90vh;
        font-size: 50px;
        box-shadow: 2px 2px;
    }

    & > #content {
        margin: 3vh;
        font-size: 25px;
        background-color: gray;
        height: 60vh;
        width: 60vh;
        word-break: break-all;
        box-shadow: 2px 2px;
        padding: 30px;
        border-radius: 30px;
    }
`;
