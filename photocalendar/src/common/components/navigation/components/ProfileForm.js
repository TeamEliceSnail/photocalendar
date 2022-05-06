import React from 'react';
import Wrapper from './ProfileFormStyle';
import profileimg from '../../../img/profile.jpg';

const ProfileForm = () => {
    return (
        <Wrapper>
            <div id="profile-container">
                <img src={profileimg} alt="profileimg" />
            </div>
            <div id="nickname-container">Jenny</div>
            <div id="email-container">jenny123@gmail.com</div>
        </Wrapper>
    );
};

export default ProfileForm;
