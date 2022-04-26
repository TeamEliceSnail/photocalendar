import React from "react";
import Wrapper from "./SlideStyle";

const Slide = ({ img, zIndex }) => {
    return <Wrapper src={img} zIndex={zIndex} />;
};

export default Slide;
