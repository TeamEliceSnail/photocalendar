import React from 'react'
import xImg from '../../img/x.png'
import Wrapper from './style';
import ProfileForm from './profileform';
import NavForm from './navform';

const Navigation = ({toggle, NavToggle}) => {
  return (
    <Wrapper toggle={toggle}>
      <img src={xImg} alt="toggle-off-btn" onClick={NavToggle}/>
      <ProfileForm/>
      <NavForm/>
    </Wrapper>
  )
}

export default Navigation