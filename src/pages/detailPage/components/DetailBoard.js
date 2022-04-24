import styled from "styled-components";
import IMG from "./Slide";
const StyledDetailBoard = styled.div`
    /* background-color: gray; */
    display: flex;
    flex-direction: column;

    padding: 5%;
    justify-content: center;
    align-items: center;
    height: 80%;
`;
const StyledTitle = styled.div`
    margin: 5vh;
    background-color: gray;
    width: 90vh;
    font-size: 50px;
`;
const StyledContent = styled.div`
    margin: 3vh;
    font-size: 25px;
    background-color: gray;
    height: 50vh;
    width: 90vh;
    /* filter: blur(5px); */
`;

const DetailBoard = () => {
    return (
        <StyledDetailBoard>
            <StyledTitle>TITLE</StyledTitle>
            <StyledContent>content</StyledContent>
        </StyledDetailBoard>
    );
};

export default DetailBoard;
