import React from 'react';
import LogoAnim from '../Logo/LogoAnim.svg';

const Games: React.FC = () => {
  return (
    <div className="content">
      <object width="320px" height="180px" type="image/svg+xml" data={LogoAnim}>
        LogoAnim
      </object>
      <iframe
        title="Steam No Escape"
        src="https://store.steampowered.com/widget/667060/"
        frameBorder="0"
        width="646"
        height="190"
      ></iframe>
      <style jsx>{`
        .content {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          margin: 16px 0px;
          background-color: #222222;
        }
      `}</style>
    </div>
  );
};

export default Games;
