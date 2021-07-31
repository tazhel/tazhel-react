import React from 'react';

const Martin: React.FC = () => {
  return (
    <div className="content">
      <div className="box">
        <img className="logo" width="280px" src="Martin.jpg" alt="Martin Helvig" />
        <div className="text">
          Hi, I am Martin Helvig, a game developer and founder of Tazhel
          <p />
          Currently I work at Bouvet in Norway, where I work on future tech like HoloLens
          2 and VR simulations etc.
          <p />
          My passion has always been about creating games, and I now feel it is time to
          start a new game project in my spare time.
          <p />
          <a className="link" href="mailto: tazhel@gmail.com">
            tazhel@gmail.com
          </a>
        </div>
      </div>
      <style jsx>{`
        .content {
          display: flex;
          justify-content: center;
          margin: 136px 0px 16px 0px;
          background-color: #222222;
          color: white;
        }
        .box {
          display: flex;
          justify-content: space-between;
          width: 800px;
          color: white;
        }
        .logo {
          margin: 16px 18px 16px 24px;
          border-radius: 8px;
          border-style: none;
          border: none;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .text {
          margin: 24px 24px 24px 18px;
          text-align: left;
        }
        .link {
          color: #53bddf;
        }
        @media only screen and (max-width: 600px) {
          .content {
            margin: 88px 0px 16px 0px;
          }
          .box {
            width: 500px;
            flex-direction: column;
            align-items: center;
            margin: 12px;
          }
          .text {
            margin: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Martin;
