import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';

const Games: React.FC = () => {
  return (
    <div className="content">
      <object width="320px" height="180px" type="image/svg+xml" data={LogoAnim}>
        LogoAnim
      </object>
      <iframe
        className="steam"
        title="Steam No Escape"
        src="https://store.steampowered.com/widget/667060/"
        frameBorder="0"
      ></iframe>
      <style jsx>{`
        .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin: 88px 0px 16px 0px;
          background-color: #222222;
        }
        .steam {
          width: 646px;
          height: 190px;
        }
        @media only screen and (max-width: 700px) {
          .steam {
            width: calc(100vw - 58px);
          }
        }
      `}</style>
    </div>
  );
};

export default Games;
