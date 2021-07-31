import React from 'react';

const Mods: React.FC = () => {
  const handleLink = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="content">
      <div className="logo">
        <img width="180px" src="EU4Logo.png" alt="Europa Universalis 4" />
      </div>
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201"
        >
          Expand UI for Europa Universalis 4
        </a>
        <img className="box-image" src="EU4Expand.jpg" alt="ExpandUI" width="200px"></img>
        <div className="box-image-text">
          A long awaited mod for people who are tired of
          <br />
          scrolling though diplomatic actions. Made for
          <br />
          higher resolution monitors, like 2560x1440.
        </div>
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
        <img className="box-image" src="EU4States.jpg" alt="ExpandUI" width="200px"></img>
        <div className="box-image-text">
          In this mod you can view the province, states, <br />
          institution and building simultaneously. <br />
        </div>
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
      <div className="logo">
        <img width="180px" src="WallpaperLogo.png" alt="Wallpaper Engine" />
      </div>
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1325812253"
        >
          Earth in the big Universe for Wallpaper Engine
        </a>
        <img
          className="box-image"
          src="WallpaperEarth.jpg"
          alt="ExpandUI"
          width="200px"
        ></img>
        <div className="box-image-text">
          An animated background which has focus on <br />
          the earth while the sun is slowly entering and <br />
          exiting view.
        </div>
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
          margin: 88px 0px 16px 0px;
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
          height: 200px;
          background-color: #444444;
          color: white;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .box-text {
          font-size: 18px;
          height: fit-content;
          margin: 16px 28px;
          color: white;
          text-decoration: none;
        }
        .box-image {
          margin: 64px 0px 0px 64px;
          position: absolute;
        }
        .box-image-text {
          margin: 64px 0px 0px 284px;
          position: absolute;
          color: #dddddd;
        }
        .box-button {
          position: absolute;
          align-self: flex-end;
          margin: 148px 20px 20px 20px;
          cursor: default;
          background: #6fa720;
          color: white;
          width: 110px;
          height: 34px;
          border-radius: 4px;
          border-style: none;
          border: none;
          box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
        }
        .box-button:hover {
          cursor: pointer;
        }
        .logo {
          margin: 24px 0px;
          width: 640px;
        }
        @media only screen and (max-width: 700px) {
          .logo {
            width: calc(100vw - 64px);
          }
          .box {
            width: calc(100vw - 64px);
          }
          .box-image {
            position: absolute;
            visibility: hidden;
          }
          .box-image-text {
            margin: 64px 0px 0px 64px;
          }
        }
        @media only screen and (max-width: 500px) {
          .box {
            height: 120px;
          }
          .box-image-text {
            position: absolute;
            visibility: hidden;
          }
          .box-button {
            left: 50%;
            transform: translate(-50%, 0);
            margin: 68px 0px 20px 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default Mods;
