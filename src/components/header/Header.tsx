import { Link, useLocation } from 'react-router-dom';
import LogoAnim from '../../svg/LogoAnim.svg';
import './header.css';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="header-container">
            <Link to="/" className="header-logo-container">
                <object className="header-logo" height="72px" type="image/svg+xml" data={LogoAnim}>
                    LogoAnim
                </object>
            </Link>
            <nav>
                <Link to="/games" className={`header-button ${location.pathname === '/games' ? 'active' : ''}`}>
                    Games
                </Link>
                <Link to="/mods" className={`header-button ${location.pathname === '/mods' ? 'active' : ''}`}>
                    Mods
                </Link>
                <Link to="/other" className={`header-button ${location.pathname === '/other' ? 'active' : ''}`}>
                    Other
                </Link>
                <Link to="/about" className={`header-button ${location.pathname === '/about' ? 'active' : ''}`}>
                    About
                </Link>
            </nav>
        </header>
    );
};

export default Header;
