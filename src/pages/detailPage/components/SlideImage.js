import { useEffect, useRef, useState } from 'react';
import Slide from './Image';
import Wrapper from './SlideImageStyle';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import backgroundImageUrlState from '../../../recoil/backgroundImageUrlState';
import { useRecoilState } from 'recoil';

const json = [
    {
        url: 'images/picture01.jpg',
    },
    {
        url: 'images/picture02.jpg',
    },
    {
        url: 'images/picture03.jpg',
    },
];
const TOTAL_SLIDES = json.length;

const SlideImage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [backgroundImageUrl, setBackgroundImageUrl] = useRecoilState(
        backgroundImageUrlState
    );
    const slideRef = useRef(null);

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
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${
            currentSlide * 100
        }%)`;
    }, [currentSlide]);

    return (
        <Wrapper>
            <MdArrowBackIos
                className="btn prevBtn"
                size={30}
                onClick={prevSlide}
            />
            <div className="slideContainer">
                <div className="slider" ref={slideRef}>
                    {json.map((item, i) => (
                        <Slide key={i} img={item.url}></Slide>
                    ))}
                </div>
            </div>
            <MdArrowForwardIos
                className="btn nextBtn"
                size={30}
                onClick={nextSlide}
            />
        </Wrapper>
    );
};

export default SlideImage;
