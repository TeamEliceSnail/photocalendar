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

const CustomSlide = ({ data, btnSize, handlePage }) => {
    return <SlideImage data={data} btnSize={btnSize} handlePage={handlePage} />;
};

export default CustomSlide;

CustomSlide.defaultProps = {
    data: default_data,
    btnSize: 30,
};

CustomSlide.propTypes = {
    data: PropTypes.array,
    btnSize: PropTypes.number,
};
