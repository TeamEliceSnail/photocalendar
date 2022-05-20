import React, { useEffect, useState } from 'react';
import Wrapper from './style';
import ProfileForm from '././components/ProfileForm';
import NavForm from '././components/NavForm';
import { useLocation } from 'react-router-dom';

const Navigation = ({ navFlag, navToggle }) => {
    const location = useLocation();
    const [visibleState, setVisibleState] = useState(true);

    useEffect(() => {
        if (location.pathname === '/login') {
            setVisibleState(false);
        } else {
            setVisibleState(true);
        }
    }, [location]);

    return (
        <>
            {visibleState && (
                <Wrapper navFlag={navFlag}>
                    <ProfileForm />
                    <NavForm />
                </Wrapper>
            )}
        </>
    );
};

export default Navigation;
