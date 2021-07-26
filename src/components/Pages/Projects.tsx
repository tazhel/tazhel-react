import React from 'react';

const Projects: React.FC = () => {
  const handleLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="content">
      <img className="logo" width="300px" src="Eu4Logo.png" alt="Europa Universalis 4" />
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201"
        >
          Expand UI for Europa Universalis 4
        </a>
        <button
          className="box-button"
          onClick={() =>
            handleLink(
              'https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201',
            )
          }
        >
          Free on Steam
        </button>
      </div>
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1897059501"
        >
          States UI for Europa Universalis 4
        </a>
        <button
          className="box-button"
          onClick={() =>
            handleLink(
              'https://steamcommunity.com/sharedfiles/filedetails/?id=1897059501',
            )
          }
        >
          Free on Steam
        </button>
      </div>
      <img
        className="logo"
        width="280px"
        src="WallpaperLogo.png"
        alt="Wallpaper Engine"
      />
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1325812253"
        >
          Earth in the big Universe for Wallpaper Engine
        </a>
        <button
          className="box-button"
          onClick={() =>
            handleLink(
              'https://steamcommunity.com/sharedfiles/filedetails/?id=1325812253',
            )
          }
        >
          Free on Steam
        </button>
      </div>
      <style jsx>{`
        .content {
          margin: 16px 0px;
          background-color: #222222;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .box {
          margin: 16px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 644px;
          height: 166px;
          background-color: #444444;
          color: white;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .box-text {
          display: flex;
          height: fit-content;
          margin: 16px;
          color: white;
          text-decoration: none;
        }
        .box-button {
          display: flex;
          align-self: flex-end;
          margin: 16px;
          cursor: default;
          align-items: center;
          justify-content: center;
          background: #6fa720;
          color: white;
          width: 110px;
          height: 34px;
          border-radius: 4px;
          border-style: none;
          border: none;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .box-button:hover {
          cursor: pointer;
        }
        .logo {
          margin: 8px 0px 16px 0px;
        }
      `}</style>
    </div>
  );
};

export default Projects;
