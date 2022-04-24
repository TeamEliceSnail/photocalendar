import React from 'react'
import buttonImg from '../../../img/calendar.png'
import Wrapper from './navButtonStyle'

const NavButton = ({title}) => {
    return (
        <Wrapper>
            <div id="nav-button-icon"><img src={buttonImg} alt="p" /></div>
            <div id="nav-button-title">{title}</div>
        </Wrapper>
    )
}

export default NavButton