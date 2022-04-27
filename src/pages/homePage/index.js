import CalendarHeader from './components/CalendarHeader';
// import CalendarSection from './components/calendarSection';
import { HomePageContainer } from './style';
import { Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <HomePageContainer>
            <CalendarHeader />
            {/* <CalendarSection /> */}
        </HomePageContainer>
    );
};

export default HomePage;