// modules
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// img
import toggleImg from "./common/img/menu.png";

// components
import ToggleButton from "./common/components/toggleButton";
import Navigation from "./common/components/navigation";

// pages
import HomePage from "./pages/homePage";
import Login from "./pages/logIn";
import DetailPage from "./pages/detailPage";
import FavoritePage from "./pages/favoritePage";

// recoil
import { RecoilRoot } from "recoil";

// testComponent
import BookMark from "./common/components/bookmark";


const App = () => {
    const [navFlag, setNavFlag] = useState(true);
    const navToggle = () => setNavFlag(!navFlag)

    return (
        <RecoilRoot>
        <BrowserRouter>
            {/* <ToggleButton navToggle={navToggle} toggleImg={toggleImg} />
            <Navigation navFlag={navFlag} navToggle={navToggle} /> */}
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<FavoritePage />}></Route>
                <Route path="/detailage" element={<DetailPage />}></Route>
                <Route path="/component" element={<BookMark />}></Route>
            </Routes>
        </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
