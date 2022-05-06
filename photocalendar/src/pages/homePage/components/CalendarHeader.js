import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Wrapper } from './CalendarHeaderStyle';

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
    const [monthPosition, setMonthPositon] = useState(nowDate.getMonth());
    const [nowMonth, setNowMonth] = useState(monthList[monthPosition]);

    const handleLeftClick = () => {
        let currentPos = monthPosition;
        if (currentPos - 1 < 0) {
            currentPos = 11;
        } else {
            currentPos -= 1;
        }
        setMonthPositon(currentPos);
        setNowMonth(monthList[currentPos]);
    };

    const handleRightClick = () => {
        let currentPos = monthPosition;

        if (currentPos + 1 > 11) {
            currentPos = 0;
        } else {
            currentPos += 1;
        }
        setMonthPositon(currentPos);
        setNowMonth(monthList[currentPos]);
    };

    return (
        <Wrapper>
            <MdKeyboardArrowLeft onClick={handleLeftClick} className='icon_arrow' />
            <h1 className='month'>{paintMonth(nowMonth)}</h1>
            <MdKeyboardArrowRight onClick={handleRightClick} className='icon_arrow' />
        </Wrapper>
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
