import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="intro">
      <iframe
        width="100%"
        height="720px"
        src="https://www.youtube.com/embed/HagSECM08yE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <style jsx>{`
        .intro {
          background-color: #222222;
        }
      `}</style>
    </div>
  );
};

export default Intro;
