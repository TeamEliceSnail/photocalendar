import CalendarHeader from './components/CalendarHeader';
import CalendarMain from './components/CalendarMain';
import { HomePageContainer } from './style';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const HomePage = () => {
    const [cookie] = useCookies(['user']);

    // 메인페이지 접근 시 로그인 안 됐다면 login page로 redirect
    useEffect(() => {
        if (!cookie.user) {
            window.location.replace('/login');
        }
    }, []);

    return (
        <HomePageContainer>
            <CalendarMain />
            <CalendarHeader />
        </HomePageContainer>
    );
};

export default HomePage;
