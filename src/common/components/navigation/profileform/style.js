
import styled from 'styled-components';

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: pink; */
  width: 200px;
  height: 35vh;

  & > #profile-container > img {
    width: 140px;
    height: 140px;
    border-radius: 500px;
  }

  & > #nickname-container {
    font-size: 25px;
    font-style: italic;
  }

  & > #email-container {
    font-size: 15px;
    color: gray;
  }

`