import styled from "styled-components";

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3%;
    width: 25%;
    overflow: hidden;

    & div {
        margin: 10px;
    }

    .btnDiv {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .btn {
        all: unset;
        border: 1px solid coral;
        padding: 0.5em 2em;
        color: coral;
        border-radius: 10px;
        &:hover {
            transition: all 0.3s ease-in-out;
            background-color: coral;
            color: #fff;
        }
    }
    .sliderContainer {
        width: ${(props) => props.size || "100"}%;
        display: flex;
    }
`;
