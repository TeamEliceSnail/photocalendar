import styled from 'styled-components';

export default styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;
    width: 60vh;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
    & > #title {
        /* background-color: gray; */
        /* width: 90vh; */
        width: 100%;
        margin-left: 7vh;
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
`;
