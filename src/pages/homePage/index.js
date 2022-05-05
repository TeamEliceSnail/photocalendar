import CalendarHeader from './components/CalendarHeader';
import CalendarMain from './components/CalendarMain';
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