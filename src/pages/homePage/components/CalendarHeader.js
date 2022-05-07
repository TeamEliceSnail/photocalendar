import { useRecoilState } from 'recoil';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Wrapper } from './CalendarHeaderStyle';
import { paintMonth } from '../utils/calendarHeaderUtils';
import { currentDateState } from '../../../recoil';
import { useState } from 'react';
import { MonthModal } from './MonthModal';

const CalendarHeader = () => {
    const [currentDate, setCurrentDate] = useRecoilState(currentDateState);
    const [modalState, setModalState] = useState(false);

    function onUpClick() {
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentMonth - 1 < 0) {
            currentMonth = 11;
            currentYear -= 1;
        } else {
            currentMonth -= 1;
        }
        setCurrentDate(new Date(currentYear, currentMonth));
    }

    function onDownClick() {
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentMonth + 1 > 11) {
            currentMonth = 0;
            currentYear += 1;
        } else {
            currentMonth += 1;
        }
        setCurrentDate(new Date(currentYear, currentMonth));
    }

    function toggleDateModal() {
        setModalState((prev) => !prev);
    }

    return (
        <Wrapper>
            <MdKeyboardArrowUp onClick={onUpClick} className="icon_arrow up" />
            {modalState ? (
                <MonthModal toggleDateModal={toggleDateModal} />
            ) : (
                <></>
            )}
            <h1
                className="current_date"
                onClick={toggleDateModal}
                state={modalState}
            >
                {paintMonth(
                    currentDate.toLocaleString('en-US', { month: 'long' }),
                    currentDate.getFullYear()
                )}
            </h1>
            <MdKeyboardArrowDown
                onClick={onDownClick}
                className="icon_arrow down"
            />
        </Wrapper>
    );
};

export default CalendarHeader;
