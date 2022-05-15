import styled from 'styled-components';

export default styled.div`
    width: 20px;
    margin-top: 3px;

    & > img {
        width: 100%;
    }

    & > img:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`