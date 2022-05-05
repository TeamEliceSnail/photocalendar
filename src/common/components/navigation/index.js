import React from 'react';
import xImg from '../../img/x.png';
import Wrapper from './style';
import ProfileForm from '././components/ProfileForm';
import NavForm from '././components/NavForm';

const Navigation = ({ navFlag, navToggle }) => {
    if (window.location.pathname === '/login') return null;
    return (
        <Wrapper navFlag={navFlag}>
            <ProfileForm />
            <NavForm />
        </Wrapper>
    );
};

export default Navigation;