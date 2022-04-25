import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import Wrapper from "./SlideImageStyle";
import backgroundImageUrlState from "../state/backgroundImageUrlState";
import { useRecoilState } from "recoil";

const json = [
    {
        url: "images/picture01.jpg",
    },
    {
        url: "images/picture02.jpg",
    },
    {
        url: "images/picture03.jpg",
    },
];
const TOTAL_SLIDES = json.length;

const SlideImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [backgroundImageUrl, setBackgroundImageUrl] = useRecoilState(
        backgroundImageUrlState
    );
    const slideRef = useRef(null);
    const slideSize = 30;
    const nextSlide = () => {
        currentSlide >= TOTAL_SLIDES - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };
    const prevSlide = () => {
        currentSlide === 0
            ? setCurrentSlide(TOTAL_SLIDES - 1)
            : setCurrentSlide(currentSlide - 1);
    };

    useEffect(() => {
        setBackgroundImageUrl(json[currentSlide].url);
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${
            currentSlide * 100
        }%)`;
    }, [currentSlide]);

    return (
        <Wrapper>
            <div className="sliderContainer" ref={slideRef}>
                {json.map((item, i) => (
                    <Slide key={i} size={slideSize} img={item.url}></Slide>
                ))}
            </div>
            <div className="btnDiv">
                <button className="btn prevBtn" onClick={prevSlide}>
                    Prev
                </button>
                <button className="btn nextBtn" onClick={nextSlide}>
                    Next
                </button>
            </div>
        </Wrapper>
    );
};

export default SlideImage;
