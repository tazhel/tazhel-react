import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogoAnim from '../Logo/LogoAnim.svg';
import { Link } from 'react-router-dom';
import useTazhelContext from '../../context/tazhelContext';

const TopBar: React.FC = () => {
  const { setPage, page } = useTazhelContext();

  const handleIntro = () => {
    if (page != 0) {
      setPage(0);
    }
    return <></>;
  };
  const handleGames = () => {
    if (page != 1) {
      setPage(1);
    }
    return <></>;
  };
  const handleMods = () => {
    if (page != 2) {
      setPage(2);
    }
    return <></>;
  };
  const handleAbout = () => {
    if (page != 3) {
      setPage(3);
    }
    return <></>;
  };
  const handleMartin = () => {
    if (page != 4) {
      setPage(4);
    }
    return <></>;
  };

  return (
    <div className="topbar">
      <Router>
        <Link onClick={() => handleIntro()} className="topbar-logo" to="/">
          <object
            className="topbar-logo-object"
            height="72px"
            type="image/svg+xml"
            data={LogoAnim}
          >
            LogoAnim
          </object>
        </Link>
        <div className="topbar-pages">
          <Link onClick={() => handleGames()} className="topbar-page" to="/games">
            GAMES
          </Link>
          <Link onClick={() => handleMods()} className="topbar-page" to="/mods">
            MODS
          </Link>
          <Link onClick={() => handleAbout()} className="topbar-page" to="/about">
            ABOUT
          </Link>
          <Link onClick={() => handleMartin()} className="topbar-page-m" to="/martin">
            MARTIN
            <br />
            HELVIG
          </Link>
          <Link onClick={() => handleMartin()} className="topbar-page-d" to="/martin">
            MARTIN HELVIG
          </Link>
          <Switch>
            <Route exact path="/" component={handleIntro}></Route>
            <Route exact path="/games" component={handleGames}></Route>
            <Route exact path="/mods" component={handleMods}></Route>
            <Route exact path="/about" component={handleAbout}></Route>
            <Route exact path="/martin" component={handleMartin}></Route>
          </Switch>
        </div>
      </Router>
      <style jsx>{`
        .topbar {
          z-index: 10;
          position: fixed;
          width: 100%;
          height: 72px;
          color: white;
          display: flex;
          justify-content: space-evenly;
          background-color: #353535;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .topbar-logo {
          cursor: pointer;
        }
        .topbar-logo-object {
          pointer-events: none;
        }
        .topbar-pages {
          display: flex;
          align-items: center;
        }
        .topbar-page {
          padding: 26px 16px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: white;
        }
        .topbar-page-d {
          padding: 26px 16px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: white;
        }
        .topbar-page-m {
          position: absolute;
          visibility: hidden;
        }
        .topbar-page:hover {
          color: orange;
        }
        @media only screen and (max-width: 600px) {
          .topbar-logo {
            position: absolute;
            visibility: hidden;
          }
          .topbar-page-d {
            position: absolute;
            visibility: hidden;
          }
          .topbar-page-m {
            position: inherit;
            padding: 15px 16px;
            cursor: pointer;
            user-select: none;
            text-decoration: none;
            color: white;
            visibility: visible;
          }
          .topbar-page-m:hover {
            color: orange;
          }
        }
      `}</style>
    </div>
  );
};

export default TopBar;
