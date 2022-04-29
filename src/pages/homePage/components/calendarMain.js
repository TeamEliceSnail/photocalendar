import { DayComponent } from './day';
import { Wrapper } from './calendarMainStyle';

const CalendarMain = () => {
    const currentYear = '2022';
    const currentMonth = 5;
    const firstDate = new Date(currentYear, currentMonth, 0);
    const endDate = new Date(currentYear, currentMonth + 1, 0);
    const previousMonth = [firstDate.getDate(), firstDate.getDay()];
    const nextMonth = [endDate.getDate(), endDate.getDay()];

    const calendar = calculateCalendar(previousMonth, nextMonth);

    return (
        <Wrapper>
            <section className='weekday'>
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thr</li>
                <li>Fri</li>
                <li>Sat</li>
            </section>
            {calendar.map((informationDay) => {
                return <DayComponent informationDay={informationDay} />;
            })}
        </Wrapper>
    );
};

function calculateCalendar([prevDate, prevDay], [nextDate, nextDay]) {
    const result = [];
    let dayCount = 0;
    let i;

    for (i = checkSunday(prevDate, prevDay); i <= prevDate; i++) {
        result.push({ date: i, day: dayCount, state: 'previous' });
        dayCount = dayCount === 6 ? 0 : dayCount + 1;
    }

    for (i = 1; i <= nextDate; i++) {
        result.push({ date: i, day: dayCount, state: 'current' });
        dayCount = dayCount === 6 ? 0 : dayCount + 1;
    }

    for (i = 1; i <= 6 - nextDay; i++) {
        result.push({ date: i, day: dayCount, state: 'next' });
        dayCount = dayCount === 6 ? 0 : dayCount + 1;
    }

    function checkSunday(prevDate, prevDay) {
        if (prevDate === 30 && prevDay === 6) return prevDate + 1;
        else return prevDate - prevDay;
    }

    return result;
}

export default CalendarMain;
