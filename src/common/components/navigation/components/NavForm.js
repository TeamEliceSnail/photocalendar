import React, { useEffect, useState } from 'react';
import Wrapper from './NavFormStyle';
import NavButton from './NavButton';

// Icons
import homeIcon from '../../../img/home.png'
import favoriteIcon from '../../../img/favorite.png'
import deleteIcon from '../../../img/delete.png'
import profileIcon from '../../../img/profile.png'
import homeIconDark from '../../../img/home-darkmode.png'
import favoriteIconDark from '../../../img/favorite-darkmode.png'
import deleteIconDark from '../../../img/delete-darkmode.png'
import profileIconDark from '../../../img/profile-darkmode.png'


const NavForm = () => {
    const [selectUrl, setSelectUrl] = useState('/')
    const [buttonList, setButtonList] = useState([
        { title: "My Calendar", url: "/", img: homeIcon, imgDark: homeIconDark, dark: true},
        { title: "Favorite", url: "/like", img: favoriteIcon, imgDark: favoriteIconDark, dark: false},
        { title: "Delete Blog", url: "", img: deleteIcon, imgDark: deleteIconDark, dark: false},
        { title: "Profile", url: "", img: profileIcon, imgDark: profileIconDark, dark: false},
    ]);

    useEffect(() => {
        const path = document.location.pathname.trim()
        selectPage(path)
        setSelectUrl(path)
    }, []);

    const selectPage = (url) => {
        setButtonList(buttonList.map( button => 
            button.url === url ? { ...button, dark: true } : { ...button, dark: false }
        ));
        setSelectUrl(url);
    };

    return (
        <Wrapper>
            {buttonList.map((button, i) => (
                <NavButton key={i} buttonInfo={button} selectPage={selectPage}/>
            ))}
        </Wrapper>
    );
};

export default NavForm;