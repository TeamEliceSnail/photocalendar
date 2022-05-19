import { useCallback, useEffect, useRef, useState } from 'react';
import Slide from './Image';
import Wrapper from './SlideImageStyle';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { boardEditState } from '../../../../recoil';

const SlideImage = ({ data, btnSize, handlePage, page, popData, addFlag }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (boardEditFlag) {
            if (addFlag) popData();
            setBoardEditFlag(false);
        }
        currentSlide >= data.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (boardEditFlag) {
            if (addFlag) popData();
            setBoardEditFlag(false);
        }
        currentSlide === 0
            ? setCurrentSlide(data.length - 1)
            : setCurrentSlide(currentSlide - 1);
    };

    useEffect(() => {
        setCurrentSlide(page);
    }, [page]);

    useEffect(() => {
        handlePage(currentSlide);
        slideRef.current.style.transition = 'all 0.5s ease-in-out';
        slideRef.current.style.transform = `translateX(-${
            currentSlide * 100
        }%)`;
    }, [currentSlide]);

    return (
        <Wrapper>
            <div>
                <MdArrowBackIos
                    className="btn prevBtn"
                    size={btnSize}
                    onClick={prevSlide}
                />
            </div>
            <div className="slideContainer">
                <div className="slider" ref={slideRef}>
                    {data.map((item, i) => (
                        <Slide key={i} img={item.url}></Slide>
                    ))}
                </div>
            </div>
            <div>
                <MdArrowForwardIos
                    className="btn nextBtn"
                    size={btnSize}
                    onClick={nextSlide}
                />
            </div>
        </Wrapper>
    );
};

SlideImage.defaultProps = {
    data: [
        {
            url: 'images/picture01.jpg',
            title: '없음',
            content: '없음',
        },
    ],
};

SlideImage.propTypes = {
    data: PropTypes.array,
};

export default SlideImage;