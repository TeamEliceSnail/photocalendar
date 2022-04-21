import styled from 'styled-components';

export const CalendarHeaderContainer = styled.section`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ff9999;
    justify-content: center;
    align-items: center;
`;

export const CalendarMonth = styled.h1`
    padding: 0 2rem;
    margin: 0;
    margin-bottom: 1rem;
    font-size: 5rem;
    text-align: center;
`;

export const MoveMonthBtn = styled.button`
    width: 50px;
    height: 35px;
    border: 1px solid black;
    background-color: white;
`;
