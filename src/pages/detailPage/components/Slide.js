import React from "react";
import styled from "styled-components";

const IMG = styled.img`
    width: 100%;
    z-index: ${(props) => props.zIndex || "auto"};
`;

const Slide = ({ img, zIndex }) => {
    return <IMG src={img} zIndex={zIndex} />;
};

export default Slide;
