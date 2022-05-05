import { useEffect, useRef, useState } from 'react';
import Slide from './Image';
import Wrapper from './SlideImageStyle';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const SlideImage = ({ jsonObj, btnSize }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        currentSlide >= jsonObj.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };
    const prevSlide = () => {
        currentSlide === 0
            ? setCurrentSlide(jsonObj.length - 1)
            : setCurrentSlide(currentSlide - 1);
    };

    useEffect(() => {
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${
            currentSlide * 100
        }%)`;
    }, [currentSlide]);

    return (
        <Wrapper>
            <MdArrowBackIos
                className="btn prevBtn"
                size={btnSize}
                onClick={prevSlide}
            />
            <div className="slideContainer">
                <div className="slider" ref={slideRef}>
                    {jsonObj.map((item, i) => (
                        <Slide key={i} img={item.url}></Slide>
                    ))}
                </div>
            </div>
            <MdArrowForwardIos
                className="btn nextBtn"
                size={btnSize}
                onClick={nextSlide}
            />
        </Wrapper>
    );
};

export default SlideImage;
