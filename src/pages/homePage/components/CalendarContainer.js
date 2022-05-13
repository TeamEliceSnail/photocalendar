import { DayComponent } from './Day';
import { useRecoilState, useRecoilValue } from 'recoil';
import { currentDateAtom, monthDataSelector } from '../../../recoil';
import { calculateCalendar } from '../utils/calendarContainerUtil';
import { getFilteredData } from '../api';
import { useEffect } from 'react';
import { Wrapper } from './CalendarContainerStyle';

export const CalendarContainer = () => {
    const currentDate = useRecoilValue(currentDateAtom);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const previousMonth = new Date(currentYear, currentMonth, 0);
    const nextMonth = new Date(currentYear, currentMonth + 1, 0);

    const [monthData, setMonthData] = useRecoilState(monthDataSelector);
    useEffect(() => {
        setMonthData(getFilteredData(currentDate));
    }, []);

    const calendar = calculateCalendar(
        previousMonth,
        nextMonth,
        currentDate,
        monthData
    );

    return (
        <Wrapper>
            {calendar.map((informationDay, index) => {
                return (
                    <DayComponent key={index} informationDay={informationDay} />
                );
            })}
        </Wrapper>
    );
};
