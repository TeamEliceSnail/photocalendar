import { Suspense } from 'react';
import { Wrapper } from './CalendarMainStyle';
import { CalendarContainer } from './CalendarContainer';
import Loading from '../../../common/components/loading';

const CalendarMain = () => {
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
            <Suspense fallback={<Loading />}>
                <CalendarContainer />
            </Suspense>
        </Wrapper>
    );
};

export default CalendarMain;
