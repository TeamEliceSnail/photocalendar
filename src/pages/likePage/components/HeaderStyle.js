import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px;
    margin: 0% 7% 0% 7%;
    border-bottom: solid 1.5px gray;

    & > #page-title {
        width: 100px;
        height: 22px;
        vertical-align: center;
        font-size: 22px;
        font-weight: bold;
        padding: 55px 0px 10px 10px;
    }

    & > #filter-button {
        width: 27px;
        height: 27px;
        padding: 55px 10px 10px 0px;
        cursor: pointer;
    }

    & > #filter-button > img {
        width: 90%;
        padding: 10%;
        background-color: rgb(152 176 171);
        border-radius: 8px;
    }
`