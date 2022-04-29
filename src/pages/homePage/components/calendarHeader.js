import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import CalendarHeaderContainer from './calendarHeaderStyle';

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
            <MdKeyboardArrowLeft onClick={handleClick} id='left' className='icon_arrow' />
            <h1 className='month'>{paintMonth(nowMonth)}</h1>
            <MdKeyboardArrowRight onClick={handleClick} id='right' className='icon_arrow' />
        </CalendarHeaderContainer>
    );
};

function paintMonth(str) {
    const [highlightWord, rest] = [str.slice(0, 3), str.slice(3)];
    return (
        <>
            <span className='highlight'>{highlightWord}</span>
            <span>{rest}</span>
        </>
    );
}

export default CalendarHeader;
