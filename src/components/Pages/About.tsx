import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';

const About: React.FC = () => {
  return (
    <div className="content">
      <object width="640px" height="360px" type="image/svg+xml" data={LogoAnim}></object>
      Tazhel is a company created by Martin Helvig, No Escape on Steam is currently the
      only game by Tazhel. expect quality to rise after this.
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
      `}</style>
    </div>
  );
};

export default About;
