import CalendarHeader from './components/calendarHeader';
import CalendarMain from './components/calendarMain';
import { HomePageContainer } from './style';

const HomePage = () => {
    return (
        <HomePageContainer>
            <CalendarHeader />
            <CalendarMain />
        </HomePageContainer>
    );
};

export default HomePage;
