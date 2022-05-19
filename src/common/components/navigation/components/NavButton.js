import { Link } from 'react-router-dom';
import Wrapper from './NavButtonStyle';

const NavButton = ({ buttonInfo, selectPage }) => {
    const notReadyPage = (e) => {
        if (!buttonInfo.url) {
            alert('Coming soon:)')
            e.preventDefault()
        } else {
            selectPage(buttonInfo.url)
        }
    }
    
    return (
        <Link to={buttonInfo.url} style={{ width: '100%', textDecoration: 'none'}} onClick={notReadyPage}>
            <Wrapper dark={buttonInfo.dark}>
                <div id="nav-button-icon">
                    <img src={
                        buttonInfo.dark === true ? buttonInfo.imgDark : buttonInfo.img
                    } alt="btn" />
                </div>
                <div id="nav-button-title">{buttonInfo.title}</div>
            </Wrapper>
        </Link>
    );
};

export default NavButton;