import React from 'react';
import Wrapper from './style';

const kakaoRedirectUri = 'https://teamsnail-photocalendar-view.du.r.appspot.com/auth/kakao/callback';
const kakaoClientID = '904d1d2aa96e5c26e05b03905933ef87';

const Login = () => {
    return (
        <Wrapper src={`${process.env.PUBLIC_URL}/images/showcase.png`}>
            <a href={KAKAO_AUTH_URL}>
                <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" />{' '}
            </a>
        </Wrapper>
    );
};

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientID}&redirect_uri=${kakaoRedirectUri}&response_type=code`;

export default Login;
