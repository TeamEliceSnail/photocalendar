import React, { useEffect, useState } from 'react';
import Wrapper from './ProfileFormStyle';

const ProfileForm = () => {
    const [userInfo, setUserInfo] = useState({});

    const parseJwt = (token) => {
        if (!token) {
            return {};
        }
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(function (c) {
                    return (
                        '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
                    );
                })
                .join('')
        );

        return JSON.parse(jsonPayload);
    };

    useEffect(() => {
        setUserInfo(parseJwt(document.cookie));
    }, []);

    return (
        <Wrapper>
            <div id="profile-container">
                <img src={userInfo.thumbnail_image} alt="profileimg" />
                <div id="nickname-container">
                    <span id="nickname">{userInfo.nickname}</span>
                </div>
                <div id="email-container">
                    <span id="email">{userInfo.email}</span>
                </div>
            </div>
        </Wrapper>
    );
};

export default ProfileForm;
