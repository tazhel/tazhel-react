import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bottombar">
      <div className="bottombar-line"></div>
      <div className="bottombar-content">
        <a href="/" className="bottombar-link">
          Home
        </a>
        <div className="bottombar-text">Tazhel™</div>
        <a href="/" className="bottombar-hidden">
          Home
        </a>
      </div>
      <style jsx>{`
        .bottombar {
          display: flex;
          align-items: center;
          flex-direction: column;
          height: 72px;
          color: white;
        }
        .bottombar-line {
          height: 1px;
          width: 100%;
          background-color: #ffffffdd;
        }
        .bottombar-content {
          display: flex;
          justify-content: space-evenly;
          margin: 16px 0px;
        }
        .bottombar-text {
          margin: 0px 32px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: white;
        }
        .bottombar-link {
          margin: 0px 32px;
          cursor: pointer;
          user-select: none;
          color: white;
          visibility: hidden;
        }
        .bottombar-hidden {
          margin: 0px 32px;
          cursor: pointer;
          user-select: none;
          text-decoration: none;
          color: white;
          visibility: hidden;
        }
        @media only screen and (max-width: 600px) {
          .bottombar-link {
            visibility: visible;
          }
        }
      `}</style>
    </div>
  );
};

export default TopBar;
