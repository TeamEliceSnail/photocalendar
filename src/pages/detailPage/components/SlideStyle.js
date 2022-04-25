import styled from "styled-components";

export default styled.img`
    width: 100%;
    z-index: ${(props) => props.zIndex || "auto"};
`;
