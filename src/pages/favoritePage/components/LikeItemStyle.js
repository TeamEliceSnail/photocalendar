import styled from 'styled-components'

export default styled.div`
    background-color: white;
    box-shadow: 4px 4px 10px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    height: 300px;
    /* border-radius: 15px; */

    & > #img-container  {
        position: relative;
        width: 90%;
        height: 67%;
        margin-bottom: 3%;
        text-align: center;
        overflow: hidden;
    }

    & > #img-container > img {
        position: absolute;
        width: 100%;
        /* height: 100%; */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    & > #detail-container  {
        border-top: 2px solid gray;
        height: 25%;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    & > #detail-container > #detail-date {
        height: 30%;
        margin: 3% 0 3% 0;
    }

    & > #detail-container > #detail-content {
        height: 40%;
        color: gray;
        font-weight: 200;
        font-size: 13px;
        overflow-x: hidden;
        text-overflow: ellipsis
    }



`