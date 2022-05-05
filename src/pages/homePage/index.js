import CalendarHeader from './components/CalendarHeader';
import CalendarMain from './components/CalendarMain';
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
