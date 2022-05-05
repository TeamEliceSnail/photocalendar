import { useRecoilState } from 'recoil';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import { Wrapper } from './CalendarHeaderStyle';
import { paintMonth } from '../utils/calendarHeaderUtils';
import { currentDateState } from '../../../recoil';

const CalendarHeader = () => {
    const [currentDate, setCurrentDate] = useRecoilState(currentDateState);

    const onLeftClick = () => {
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentMonth - 1 < 0) {
            currentMonth = 11;
            currentYear -= 1;
        } else {
            currentMonth -= 1;
        }
        setCurrentDate(new Date(currentYear, currentMonth));
    };

    const onRightClick = () => {
        let currentMonth = currentDate.getMonth();
        let currentYear = currentDate.getFullYear();

        if (currentMonth + 1 > 11) {
            currentMonth = 0;
            currentYear += 1;
        } else {
            currentMonth += 1;
        }
        setCurrentDate(new Date(currentYear, currentMonth));
    };

    return (
        <Wrapper>
            <MdKeyboardArrowUp onClick={onLeftClick} className='icon_arrow up' />
            <h1 className='current_date'>
                {paintMonth(
                    currentDate.toLocaleString('en-US', { month: 'long' }),
                    currentDate.getFullYear()
                )}
            </h1>
            <MdKeyboardArrowDown onClick={onRightClick} className='icon_arrow down' />
        </Wrapper>
    );
};

export default CalendarHeader;
