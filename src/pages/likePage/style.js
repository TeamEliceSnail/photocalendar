import styled from 'styled-components'

export default styled.div`
    background-color: #fef7c6;
    width: 100%;
    height: 100vh;
    overflow-y: scroll;

    & > #like-item-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, auto));
        gap: 30px;
        padding: 12% 7% 7% 7%;
    } 
`