import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import backgroundImageUrlState from "../state/backgroundImageUrlState";
import { useRecoilState } from "recoil";

const Container = styled.div`
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
    & div button {
        margin: 10px;
    }
`;
const Button = styled.button`
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
`;
const SliderContainer = styled.div`
    width: ${(props) => props.size || "100"}%;
    display: flex;
`;

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
        <Container>
            <SliderContainer ref={slideRef}>
                {json.map((item, i) => (
                    <Slide key={i} size={slideSize} img={item.url}></Slide>
                ))}
            </SliderContainer>
            <div>
                <Button onClick={prevSlide}>Prev</Button>
                <Button onClick={nextSlide}>Next</Button>
            </div>
        </Container>
    );
};

export default SlideImage;
