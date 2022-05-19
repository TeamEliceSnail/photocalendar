import { useCallback, useEffect, useRef, useState } from 'react';
import Slide from './Image';
import Wrapper from './SlideImageStyle';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useRecoilState } from 'recoil';
import { boardEditState } from '../../../../recoil';

const SlideImage = ({
    detailBoardData,
    btnSize,
    handlePage,
    page,
    cancelBoard,
    addFlag,
    uploadImage,
    fileDataURL,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [boardEditFlag, setBoardEditFlag] = useRecoilState(boardEditState);
    const slideRef = useRef(null);

    const nextSlide = () => {
        if (boardEditFlag) {
            if (addFlag) cancelBoard();
            setBoardEditFlag(false);
        }
        currentSlide >= detailBoardData.length - 1
            ? setCurrentSlide(0)
            : setCurrentSlide(currentSlide + 1);
    };

    const prevSlide = () => {
        if (boardEditFlag) {
            if (addFlag) cancelBoard();
            setBoardEditFlag(false);
        }
        currentSlide === 0
            ? setCurrentSlide(detailBoardData.length - 1)
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
            {detailBoardData.length > 1 ? (
                <div>
                    <MdArrowBackIos
                        className="btn prevBtn"
                        size={btnSize}
                        onClick={prevSlide}
                    />
                </div>
            ) : null}

            <div className="slideContainer">
                <div className="slider" ref={slideRef}>
                    {detailBoardData.length !== 0 ? (
                        detailBoardData.map((item, i) => (
                            <Slide
                                key={i}
                                imgurl={item.imgurl}
                                uploadImage={uploadImage}
                                fileDataURL={fileDataURL}
                            />
                        ))
                    ) : (
                        <Slide
                            key={0}
                            imgurl={''}
                            uploadImage={uploadImage}
                            fileDataURL={fileDataURL}
                        />
                    )}
                </div>
            </div>
            {detailBoardData.length > 1 ? (
                <div>
                    <MdArrowForwardIos
                        className="btn nextBtn"
                        size={btnSize}
                        onClick={nextSlide}
                    />
                </div>
            ) : null}
        </Wrapper>
    );
};

SlideImage.defaultProps = {
    detailBoardData: [
        {
            url: 'images/picture01.jpg',
            title: '없음',
            content: '없음',
        },
    ],
};

SlideImage.propTypes = {
    detailBoardData: PropTypes.array,
};

export default SlideImage;
