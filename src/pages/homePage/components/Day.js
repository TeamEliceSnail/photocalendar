import { Wrapper } from './DayStyle';

export const DayComponent = ({ informationDay }) => {
    return (
        <Wrapper
            StyledCount={informationDay.day}
            className={`${informationDay.state} ${isNowDate(
                informationDay.date
            )}`.trim()}
        >
            {informationDay.date}
        </Wrapper>
    );
};

function isNowDate(date) {
    if (date === new Date().getDate()) return 'now';
    return '';
}
