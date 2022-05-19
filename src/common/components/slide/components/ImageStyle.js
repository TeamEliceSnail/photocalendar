import styled from 'styled-components';

const ImgStyle = styled.img`
    width: 100%;
    object-fit: contain;
    background-color: rgba(0, 0, 0, 0.8);
    vertical-align: middle;
`;

const AddImgStyle = styled.img`
    width: 100%;
    object-fit: contain;
    background-color: rgba(0, 0, 0, 0.8);
    /* background-color: rgba(0, 0, 0, 0.8); */
    vertical-align: middle;
    cursor: pointer;
    &:hover {
        transition: all 0.3s ease-in-out;
        transform: scale(1.1);
    }
`;

export { ImgStyle, AddImgStyle };
