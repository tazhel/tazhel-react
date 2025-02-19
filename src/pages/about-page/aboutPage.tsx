import '../../index.css';
import LogoAnim from '../../svg/LogoAnim.svg';
import './aboutPage.css';

const AboutPage: React.FC = () => {
    return (
        <div className="page-container">
            <object className="about-logo" type="image/svg+xml" data={LogoAnim}>
                LogoAnim
            </object>
            <div className="about-text">
                Tazhel is a company created by Martin Helvig in 2017. and released the first game the same year;{' '}
                <a className="about-link" href="https://store.steampowered.com/app/667060/No_Escape/" target="_blank">
                    No Escape
                </a>{' '}
                is currently available on Steam.
                <p />
                Tazhel has been updated with a new logo and webpage, to be ready for new projects to be started.
            </div>
            <div className="about-box">
                <img className="about-image-about" width="280px" src="Martin.jpg" alt="Martin Helvig" />
                <div className="about-text">
                    Hi, I am Martin Helvig, a game developer and founder of Tazhel
                    <p />
                    Currently I work at Bouvet in Norway, where I work on future tech like HoloLens 2 and VR simulations
                    etc.
                    <p />
                    My passion has always been about creating games, and I now feel it is time to start a new game
                    project in my spare time.
                    <p />
                    <a className="about-link" href="mailto:tazhel@gmail.com">
                        tazhel@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
