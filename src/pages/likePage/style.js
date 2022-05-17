import styled from 'styled-components'

export default styled.div`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;

    & > #like-item-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, auto));
        gap: 30px;
        margin: 3% 7% 7% 7%;
    }

    & > #loading {
        height: 100px;
        background-color: red;
    }
`