import styled from 'styled-components';

export default styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    width: 60vh;
    justify-content: center;
    align-items: center;
    height: 90%;
    flex-shrink: 0;
    border-left: 2px solid gray;
    margin: 3vh;
    & > #title {
        /* background-color: gray; */
        /* width: 90vh; */
        width: 100%;
        margin-left: 8vh;
        font-size: 3rem;
        /* box-shadow: 2px 2px; */
    }

    & > #content {
        margin: 3vh;
        font-size: 25px;
        /* background-color: gray; */
        height: 55vh;
        width: 52vh;
        word-break: break-all;
        /* box-shadow: 2px 2px; */
        /* padding: 30px; */
        /* border-radius: 30px; */
    }

    .title_textarea {
        /* border: none; */
        border: solid #ffebcc;
        width: 87%;
        height: 100%;
        resize: none;
        font-size: 0.5em;
    }

    .content_textarea {
        border: solid #ffebcc;
        width: 100%;
        resize: none;
        font-size: 1em;
        height: 100%;
    }
    & > #btn_detail_confirm_cancle {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    button {
        width: 120px;
        height: 40px;
        border: none;
        box-shadow: 1px 1px rgba(0, 0, 0, 0.3);
        transition: 0.3s;
        font-size: 16px;
        background-color: #fbffe2;
    }
`;
