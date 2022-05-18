import React from 'react';
import Wrapper from './ProfileFormStyle';
import profileimg from '../../../img/profile.jpg';

const ProfileForm = () => {
    return (
        <Wrapper>
            <div id="profile-container">
                <img src={profileimg} alt="profileimg" />
                <div id="nickname-container"><span id="nickname">Jenny</span></div>
                <div id="email-container"><span id="email">jenny123@gmail.com</span></div>
            </div>
        </Wrapper>
    );
};

export default ProfileForm;
