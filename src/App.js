// modules
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// img
import toggleImg from './common/img/menu.png';

// components
import ToggleButton from './common/components/toggleButton';
import Navigation from './common/components/navigation';

// pages
import HomePage from './pages/homePage';
import Login from './pages/logIn';
import DetailPage from './pages/detailPage';
import FavoritePage from './pages/favoritePage';

// recoil
import { RecoilRoot } from 'recoil';

// testComponent
import BookMark from './common/components/bookmark';
import axios from 'axios';

const App = () => {
    const [navFlag, setNavFlag] = useState(true);
    const navToggle = () => setNavFlag(!navFlag);
    const callApi = async()=>{
        const response = await axios.get('http://localhost:5030/')
        const data = await response.json();
        return data;
    }
    callApi()
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
   
    
  
    return (
        <RecoilRoot>
            <BrowserRouter>
                {/* <ToggleButton navToggle={navToggle} toggleImg={toggleImg} />
            <Navigation navFlag={navFlag} navToggle={navToggle} /> */}
                <Routes>
                    <Route path='/login' element={<Login />}></Route>
                    <Route path='/' element={<HomePage />}></Route>
                    <Route path='/detailpage' element={<DetailPage />}></Route>
                    <Route path='/component' element={<BookMark />}></Route>
                    <Route path='/FavoritePage' element={<FavoritePage />}></Route>
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
};
export default App;