import SlideImage from './components/SlideImage';
import PropTypes from 'prop-types';

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
// const TOTAL_SLIDES = json.length;

const CustomSlide = ({ jsonObj, btnSize }) => {
    return <SlideImage jsonObj={jsonObj} btnSize={btnSize} />;
};

export default CustomSlide;

CustomSlide.defaultProps = {
    jsonObj: json,
    btnSize: 30,
};

CustomSlide.propTypes = {
    jsonObj: PropTypes.object,
    btnSize: PropTypes.number,
};
