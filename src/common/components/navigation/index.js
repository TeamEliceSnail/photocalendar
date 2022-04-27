import React from "react";
import xImg from "../../img/x.png";
import Wrapper from "./style";
import ProfileForm from "././components/profileForm";
import NavForm from "././components/navForm";

const Navigation = ({ navFlag, navToggle }) => {
    if (window.location.pathname === "/login") return null;
    return (
        <Wrapper navFlag={navFlag}>
            <img src={xImg} alt="toggle-off-btn" onClick={navToggle} />
            <ProfileForm />
            <NavForm />
        </Wrapper>
  );
}

export default Navigation