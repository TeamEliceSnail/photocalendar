import styled from "styled-components";

export default styled.div`
    & > img {
        position: fixed;
        left: 20px;
        top: 20px;
        width: 22px;
        height: 22px;
        cursor: pointer;
    }

    & > img:hover {
        transform: scale(1.1);
    }
`;
