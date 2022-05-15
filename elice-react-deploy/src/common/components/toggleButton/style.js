import styled from "styled-components";

export default styled.div`
    & > img {
        position: fixed;
        left: 20px;
        top: 20px;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }

    & > img:hover {
        transform: scale(1.1);
    }
`;
