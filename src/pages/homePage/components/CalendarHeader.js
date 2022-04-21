import { CalendarHeaderContainer, CalendarMonth, MoveMonthBtn } from './CalendarStyle';
import { useState } from 'react';

const CalendarHeader = () => {
    const monthList = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const nowDate = new Date();
    const [pos, setPos] = useState(nowDate.getMonth());
    const [nowMonth, setMonth] = useState(monthList[pos]);

    const handleClick = (event) => {
        const direction = event.target.id;
        let currentPos = pos;
        if (direction === 'left') {
            if (currentPos - 1 < 0) {
                currentPos = 11;
            } else {
                currentPos -= 1;
            }
        } else if (direction === 'right') {
            if (currentPos + 1 > 11) {
                currentPos = 0;
            } else {
                currentPos += 1;
            }
        }
        setPos(currentPos);
        setMonth(monthList[currentPos]);
    };

    return (
        <CalendarHeaderContainer>
            <MoveMonthBtn onClick={handleClick} id='left'></MoveMonthBtn>
            <CalendarMonth>{nowMonth}</CalendarMonth>
            <MoveMonthBtn onClick={handleClick} id='right'></MoveMonthBtn>
        </CalendarHeaderContainer>
    );
};

export default CalendarHeader;
