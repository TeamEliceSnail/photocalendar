import React from 'react'

const kakaoRedirectUri = 'http://localhost:5030/auth/kakao/callback'
const kakaoClientID = '904d1d2aa96e5c26e05b03905933ef87'
const Login = () => {
    return (
        
        <div className="App">
          <a href={KAKAO_AUTH_URL}>
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" /> </a>
        </div>
      );
}

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClientID}&redirect_uri=${kakaoRedirectUri}&response_type=code&prompt=login`;

export default Login