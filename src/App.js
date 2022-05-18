// modules
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// img
import toggleOnImg from './common/img/menu.png';
import toggleOffImg from './common/img/x.png';

// components
import ToggleButton from './common/components/toggleButton';
import Navigation from './common/components/navigation';
import PrivateRouter from './common/components/helpers/PrivateRouter';

// pages
import HomePage from './pages/homePage';
import Login from './pages/logIn';
import DetailPage from './pages/detailPage';
import LikePage from './pages/likePage';

import Test from './pages/test';

// recoil
import { RecoilRoot } from 'recoil';

const App = () => {
    const [navFlag, setNavFlag] = useState(true);
    const [navBtnImg, setNavBtnImg] = useState(toggleOffImg);

    const navToggle = () => {
        navFlag
            ? (() => {
                  setNavFlag(false);
                  setNavBtnImg(toggleOnImg);
              })()
            : (() => {
                  setNavFlag(true);
                  setNavBtnImg(toggleOffImg);
              })();
    };

    return (
        <RecoilRoot>
            <BrowserRouter>
                <div style={{ display: 'flex' }}>
                    <ToggleButton navToggle={navToggle} toggleImg={navBtnImg} />
                    <Navigation navFlag={navFlag} navToggle={navToggle} />
                    <Routes>
                        <Route path="/" element={<HomePage/>}></Route>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/like" element={<LikePage />}></Route>
                        <Route path="/test" element={<Test/>}></Route>
                        <Route
                            path="/"
                            element={
                                <PrivateRouter>
                                    <HomePage />
                                </PrivateRouter>
                            }
                        ></Route>
                        <Route
                            path="/detailpage/:date"
                            element={
                                <PrivateRouter>
                                    <DetailPage />
                                </PrivateRouter>
                            }
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
};
export default App;
