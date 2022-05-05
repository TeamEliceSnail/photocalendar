import { Wrapper } from './DayStyle';

export const DayComponent = ({ informationDay }) => {
    return (
        <Wrapper
            styledCount={informationDay.day}
            className={`${informationDay.state} ${isNowDate(informationDay)}`.trim()}
        >
            {informationDay.date}
        </Wrapper>
    );
};

function isNowDate({ year, month, date }) {
    const nowDate = new Date();
    if (
        year === nowDate.getFullYear() &&
        month === nowDate.getMonth() &&
        date === nowDate.getDate()
    )
        return 'now';
    return '';
}
