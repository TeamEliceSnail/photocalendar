import CalendarHeader from './components/CalendarHeader';
import CalendarMain from './components/CalendarMain';
import { HomePageContainer } from './style';

const HomePage = () => {
    return (
        <HomePageContainer>
            <CalendarMain />
            <CalendarHeader />
        </HomePageContainer>
    );
};

export default HomePage;
