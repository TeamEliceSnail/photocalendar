import React from 'react';
import Wrapper from './NavFormStyle';
import NavButton from './NavButton';

const NavForm = () => {
    const buttonList = [
        { title: "My Calendar", url: "/"},
        { title: "Favorite", url: "/likepage"},
        { title: "Delete Blog", url: "null"},
        { title: "Profile", url: "null"},
    ];

    return (
        <Wrapper>
            {buttonList.map((x, i) => (
                <NavButton key={i} title={x.title} url={x.url}/>
            ))}
        </Wrapper>
    );
};

export default NavForm;
