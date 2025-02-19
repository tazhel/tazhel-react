import '../../index.css';
import './modspage.css';

const ModsPage: React.FC = () => {
    const handleLink = (link: string) => {
        window.open(link, '_blank');
    };

    return (
        <div className="page-container">
            <div className="mods-logo">
                <img width="180px" src="EU4Logo.png" alt="Europa Universalis 4" />
            </div>
            <div className="mods-box">
                <a className="mods-box-text" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201">
                    Expand UI for Europa Universalis 4 (1.30)
                </a>
                <img className="mods-box-image" src="EU4Expand.jpg" alt="ExpandUI" width="200px"></img>
                <div className="mods-box-image-text">
                    A long awaited mod for people who are tired of
                    <br />
                    scrolling though diplomatic actions. Made for
                    <br />
                    higher resolution monitors, like 2560x1440.
                </div>
                <button
                    className="mods-box-button"
                    onClick={() => handleLink('https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201')}
                >
                    Free on Steam
                </button>
            </div>
            <div className="mods-box">
                <a className="mods-box-text" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1897059501">
                    States UI for Europa Universalis 4 (1.30)
                </a>
                <img className="mods-box-image" src="EU4States.jpg" alt="ExpandUI" width="200px"></img>
                <div className="mods-box-image-text">
                    In this mod you can view the province, states, <br />
                    institution and building simultaneously. <br />
                </div>
                <button
                    className="mods-box-button"
                    onClick={() => handleLink('https://steamcommunity.com/sharedfiles/filedetails/?id=1897059501')}
                >
                    Free on Steam
                </button>
            </div>
            <div className="mods-logo">
                <img width="180px" src="WallpaperLogo.png" alt="Wallpaper Engine" />
            </div>
            <div className="mods-box">
                <a className="mods-box-text" href="https://steamcommunity.com/sharedfiles/filedetails/?id=1325812253">
                    Earth in the big Universe for Wallpaper Engine
                </a>
                <img className="mods-box-image" src="WallpaperEarth.jpg" alt="ExpandUI" width="200px"></img>
                <div className="mods-box-image-text">
                    An animated background which has focus on <br />
                    the earth while the sun is slowly entering and <br />
                    exiting view.
                </div>
                <button
                    className="mods-box-button"
                    onClick={() => handleLink('https://steamcommunity.com/sharedfiles/filedetails/?id=1325812253')}
                >
                    Free on Steam
                </button>
            </div>
        </div>
    );
};

export default ModsPage;
