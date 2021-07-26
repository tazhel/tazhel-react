import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <iframe
        className="youtube"
        src="https://www.youtube.com/embed/HagSECM08yE?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <style jsx>{`
        .intro {
          position: relative;
          padding-bottom: 56.25%;
          paddingtop: 25;
          height: 0;
        }
        .youtube {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 1920px;
          height: 100%;
          max-height: 1080px;
        }
      `}</style>
    </div>
  );
};

export default Intro;
