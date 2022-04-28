import styled from 'styled-components';

export default styled.div`
    left: 0;
    right: 0;
    top: 0;
    width: 90%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid;
    z-index: -1;
    .date {
        margin-left: 50px;
        font-weight: bold;
        font-size: 3rem;
    }
    .menu {
        margin-right: 20px;
    }
`;
