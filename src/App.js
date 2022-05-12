// modules
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// img
import toggleOnImg from "./common/img/menu.png";
import toggleOffImg from "./common/img/x.png";

// components
import ToggleButton from './common/components/toggleButton';
import Navigation from './common/components/navigation';

// pages
import HomePage from "./pages/homePage";
import Login from "./pages/logIn";
import DetailPage from "./pages/detailPage";
import LikePage from "./pages/likePage";


// recoil
import { RecoilRoot } from 'recoil';

const App = () => {
    const [navFlag, setNavFlag] = useState(true);
    const [navBtnImg, setNavBtnImg] = useState(toggleOnImg);

    const navToggle = () => {
        navFlag 
            ? (() => {setNavFlag(false); setNavBtnImg(toggleOnImg);})()
            : (() => {setNavFlag(true); setNavBtnImg(toggleOffImg);})()
    }

    return (
        <RecoilRoot>
        <BrowserRouter>
            <div style={{ display: "flex"}}>
            <ToggleButton navToggle={navToggle} toggleImg={navBtnImg} />
            <Navigation navFlag={navFlag} navToggle={navToggle} />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<LikePage />}></Route>
                <Route path="/detailpage" element={<DetailPage />}></Route>
            </Routes>
            </div>
        </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
