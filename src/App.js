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

const App = () => {
    const [navFlag, setNavFlag] = useState(true);
    const navToggle = () => navFlag ? setNavFlag(false) : setNavFlag(true);

    return (
        <BrowserRouter>
            <ToggleButton navToggle={navToggle} toggleImg={toggleImg} />
            <Navigation navFlag={navFlag} navToggle={navToggle} />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;