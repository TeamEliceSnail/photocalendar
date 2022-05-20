import SlideImage from './components/SlideImage.js';
import PropTypes from 'prop-types';

// const TOTAL_SLIDES = json.length;

const CustomSlide = ({
    detailBoardData,
    btnSize,
    handlePage,
    page,
    cancelBoard,
    addFlag,
    uploadImage,
    fileDataURL,
}) => {
    return (
        <SlideImage
            detailBoardData={detailBoardData}
            btnSize={btnSize}
            handlePage={handlePage}
            page={page}
            cancelBoard={cancelBoard}
            addFlag={addFlag}
            uploadImage={uploadImage}
            fileDataURL={fileDataURL}
        />
    );
};

export default CustomSlide;

CustomSlide.defaultProps = {
    btnSize: 30,
};

CustomSlide.propTypes = {
    detailBoardData: PropTypes.array,
    btnSize: PropTypes.number,
    handlePage: PropTypes.func,
    page: PropTypes.number,
    popData: PropTypes.func,
    addFlag: PropTypes.bool,
};
