import '../../index.css';
import LogoAnim from '../../svg/LogoAnim.svg';
import './gamesPage.css';

const GamesPage: React.FC = () => {
    return (
        <div className="page-container">
            <object width="320px" height="180px" type="image/svg+xml" data={LogoAnim}>
                LogoAnim
            </object>
            <iframe
                className="games-steam"
                title="Steam No Escape"
                src="https://store.steampowered.com/widget/667060/"
                style={{ border: 'none' }}
            ></iframe>
        </div>
    );
};

export default GamesPage;
