import { DayComponent } from './Day';
import { Wrapper } from './CalendarMainStyle';
import { useRecoilValue } from 'recoil';
import { currentDateState } from '../../../recoil';
import { calculateCalendar } from '../utils/calendarMainUtil';
import axios from "axios"
const CalendarMain = () => {
    const currentDate = useRecoilValue(currentDateState);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDate = new Date(currentYear, currentMonth, 0);
    const endDate = new Date(currentYear, currentMonth + 1, 0);
    const previousMonth = firstDate;
    const nextMonth = endDate;

    const calendar = calculateCalendar(previousMonth, nextMonth, currentDate);
    axios.get('/home/2022-5').then(res=>console.log(res)).catch(err=>console.log(err))
    return (
        <Wrapper>
            <section className="weekday">
                <li>Sun</li>
                <li>Mon</li>
                <li>Tue</li>
                <li>Wed</li>
                <li>Thr</li>
                <li>Fri</li>
                <li>Sat</li>
            </section>
            {calendar.map((informationDay, index) => {
                return (
                    <DayComponent key={index} informationDay={informationDay} />
                );
            })}
        </Wrapper>
    );
};

export default CalendarMain;
