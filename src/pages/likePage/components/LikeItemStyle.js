import styled, { css } from "styled-components";

const calcImgSize = (imgurl) => {
    let img = new Image();
    img.src = imgurl;
    return img.width > img.height ? 'w' : 'h';
};

export default styled.div`
    background-color: black;
    color: white;
    box-shadow: 4px 4px 10px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5%;
    height: 300px;

    &:hover {
        filter: brightness(80%);
        cursor: pointer;
    }

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
        ${(props) => 
            calcImgSize(props.imgSize) === 'h' 
            ? css`width: 100%;`
            : css`height: 100%;`
        };
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    & > #detail-container  {
        height: 25%;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    & > #detail-container > #detail-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid gray;
        padding-bottom: 1%;
        margin: 1% 0% 3% 0%;
        height: 30%;
    }

    & > #detail-container > #detail-body {
        height: 50%;
        font-weight: 200;
        font-size: 13px;
        overflow-y: hidden;
    }
`