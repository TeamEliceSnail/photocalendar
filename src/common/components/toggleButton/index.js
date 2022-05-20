import Wrapper from './style';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ToggleButton = ({ navToggle, toggleImg }) => {
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
                <Wrapper onClick={navToggle}>
                    <img src={toggleImg} alt="toggle-btn" />
                </Wrapper>
            )}
        </>
    );
};

export default ToggleButton;
