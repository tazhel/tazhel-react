import React from 'react';
import BwLogo from '../Logo/BwLogo.svg';

const Restoration: React.FC = () => {
  return (
    <div className="content">
      <div className="logo">
        <object className="topbar-logo-object" type="image/svg+xml" data={BwLogo} />
      </div>
      <div className="box">
        <a
          className="box-text"
          href="https://steamcommunity.com/sharedfiles/filedetails/?id=1741500201"
        >
          Project B&W DM7 Mk2
        </a>
        <img
          className="box-image"
          src="BWBeforeAfter.jpg"
          alt="BWBeforeAfter"
          width="200px"
        ></img>
        <div className="box-text">
          Here I will show you how we made these wonderfull retro speakers into a beauty
        </div>
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

export default Restoration;
