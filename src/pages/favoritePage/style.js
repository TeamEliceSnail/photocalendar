import styled from 'styled-components'

export default styled.div`
    background-color: #fef7c6;
    width: 100%;
    height: 100%;

    & > #like-item-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, auto));
        gap: 30px;
        height: 100%;
        padding: 12% 7% 7% 7%;
    } 
`