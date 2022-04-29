import CalendarHeader from './components/calendarHeader';
import CalendarMain from './components/calendarMain';
import { HomePageContainer } from './style';
import { Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <HomePageContainer>
            <CalendarHeader />
            <CalendarMain />
        </HomePageContainer>
    );
};

export default HomePage;