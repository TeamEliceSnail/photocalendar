import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 60vh;
    justify-content: center;
    align-items: center;
    height: 90%;
    flex-shrink: 0;
    border-left: 2px solid gray;
    margin: 3vh;
    white-space: pre-wrap;

    & .likeDiv {
        width: 100%;
        margin-left: 8vh;
        display: flex;
        justify-content: start;
    }

    & .like {
        top: 0%;
        right: 0%;
        position: relative;
        color: #ff9999;
        cursor: pointer;
    }

    & > #title {
        width: 100%;
        margin-left: 8vh;
        font-size: 3rem;
        word-break: break-all;
        overflow: scroll;
    }
    & > #title {
        width: 100%;
        margin-left: 8vh;
        font-size: 3rem;
        word-break: break-all;
        overflow: scroll;
    }
    & > #title::-webkit-scrollbar {
        display: none;
    }

    & > #content {
        margin: 3vh;
        font-size: 25px;
        height: 55vh;
        width: 52vh;
        word-break: break-all;
        overflow: scroll;
    }
    & > #content::-webkit-scrollbar {
        display: none;
    }

    .title_textarea {
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
