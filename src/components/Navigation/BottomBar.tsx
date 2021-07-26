import React from 'react';

const TopBar: React.FC = () => {
  return (
    <div className="bottombar">
      <div className="bottombar-line"></div>
      <div className="bottombar-content">
        <div className="bottombar-txt">Tazhel™</div>
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
          width: 100vw;
          background-color: #ffffffdd;
        }
        .bottombar-content {
          display: flex;
          justify-content: space-evenly;
          margin: 16px 0px;
        }
        .bottombar-txt {
          margin: 0px 16px;
        }
      `}</style>
    </div>
  );
};

export default TopBar;
