import SlideImage from './components/SlideImage.js';
import PropTypes from 'prop-types';

const default_data = [
    {
        url: 'images/picture01.jpg',
    },
    {
        url: 'images/picture03.jpg',
    },
    {
        url: 'images/picture02.jpg',
    },
];
// const TOTAL_SLIDES = json.length;

const CustomSlide = ({ data, btnSize, handlePage, page, popData, addFlag }) => {
    return (
        <SlideImage
            data={data}
            btnSize={btnSize}
            handlePage={handlePage}
            page={page}
            popData={popData}
            addFlag={addFlag}
        />
    );
};

export default CustomSlide;

CustomSlide.defaultProps = {
    data: default_data,
    btnSize: 30,
};

CustomSlide.propTypes = {
    data: PropTypes.array,
    btnSize: PropTypes.number,
    handlePage: PropTypes.func,
    page: PropTypes.number,
    popData: PropTypes.func,
    addFlag: PropTypes.bool,
};
