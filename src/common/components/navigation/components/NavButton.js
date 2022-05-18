import React from 'react';
import { Link } from 'react-router-dom';
import buttonImg from '../../../img/calendar.png';
import Wrapper from './NavButtonStyle';

const NavButton = ({ title, url }) => {
    
    return (
        <Link to={url} style={{ textDecoration: 'none', color: 'black' }}>
            <Wrapper>
                <div id="nav-button-icon">
                    <img src={buttonImg} alt="p" />
                </div>
                <div id="nav-button-title">{title}</div>
            </Wrapper>
        </Link>
    );
};

export default NavButton;
