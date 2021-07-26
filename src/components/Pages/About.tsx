import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';

const About: React.FC = () => {
  return (
    <div className="content">
      <object width="640px" height="300px" type="image/svg+xml" data={LogoAnim}>
        LogoAnim
      </object>
      <div className="text">
        Tazhel is a company created by Martin Helvig in 2017. The first game released by
        Tazhel;{' '}
        <a className="link" href="https://store.steampowered.com/widget/667060/">
          No Escape
        </a>{' '}
        is currently available on Steam.
        <p />
        Tazhel has been updated with a new logo and webpage, to be ready for new projects
        to be started.
      </div>
      <style jsx>{`
        .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin: 16px 0px;
          background-color: #222222;
          color: white;
        }
        .text {
          width: 640px;
        }
        .link {
          color: lightblue;
        }
      `}</style>
    </div>
  );
};

export default About;
