import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';
import useTazhelContext from '../../context/tazhelContext';

const TopBar: React.FC = () => {
  const { setPage } = useTazhelContext();

  const handleGames = () => {
    setPage(1);
  };
  const handleProjects = () => {
    setPage(2);
  };
  const handleAbout = () => {
    setPage(3);
  };
  const handleMartin = () => {
    setPage(4);
  };

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <object height="72px" type="image/svg+xml" data={LogoAnim}></object>
      </div>
      <div className="topbar-pages">
        <div className="topbar-page" onClick={() => handleGames()}>
          GAMES
        </div>

        <div className="topbar-page" onClick={handleProjects}>
          PROJECTS
        </div>

        <div className="topbar-page" onClick={handleAbout}>
          ABOUT
        </div>

        <div className="topbar-page" onClick={handleMartin}>
          MARTIN HELVIG
        </div>
      </div>
      <style jsx>{`
        .topbar {
          height: 72px;
          color: white;
          display: flex;
          justify-content: space-evenly;
          background-color: #353535;
        }
        .topbar-logo {
          cursor: pointer;
          z-index: 100000;
        }
        .topbar-pages {
          display: flex;
          align-items: center;
        }
        .topbar-page {
          margin: 0px 16px;
          cursor: pointer;
          user-select: none;
        }
        .topbar-page:hover {
          color: orange;
        }
      `}</style>
    </div>
  );
};

export default TopBar;
