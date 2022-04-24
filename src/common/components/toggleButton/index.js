import Wrapper from "./style";

const ToggleButton = ({navToggle, toggleImg}) => {
    if (window.location.pathname === '/login') return null

    return (
        <Wrapper onClick={navToggle}>
            <img src={toggleImg} alt="toggle-btn"/>
        </Wrapper>
    )
}

export default ToggleButton