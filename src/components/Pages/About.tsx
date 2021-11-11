import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';

const About: React.FC = () => {
  return (
    <div className="content">
      <object className="logo" type="image/svg+xml" data={LogoAnim}>
        LogoAnim
      </object>
      <div className="text">
        Tazhel is a company created by Martin Helvig in 2017. and released the first game
        the same year;{' '}
        <a className="link" href="https://store.steampowered.com/widget/667060/">
          No Escape
        </a>{' '}
        is currently available on Steam.
        <p />
        Tazhel has been updated with a new logo and webpage, to be ready for new projects
        to be started.
      </div>
      <div className="box">
        <img className="image-about" width="280px" src="Martin.jpg" alt="Martin Helvig" />
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
          flex-direction: column;
          align-items: center;
          margin: 72px 0px 16px 0px;
          background-color: #222222;
          color: white;
        }
        .logo {
          width: 640px;
          height: 300px;
        }
        .image-about {
          margin: 16px 18px 16px 24px;
          border-radius: 8px;
          border-style: none;
          border: none;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .text {
          width: 600px;
          margin: 18px;
        }
        .link {
          color: lightblue;
        }
        @media only screen and (max-width: 600px) {
          .text {
            width: calc(100vw - 64px);
          }
          .logo {
            width: 320px;
            height: 150px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
