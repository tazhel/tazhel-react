import React from 'react';
import BwLogo from '../Logo/BwLogo.svg';

const Restoration: React.FC = () => {
  return (
    <div className="content">
      <div className="logo">
        <object className="topbar-logo-object" type="image/svg+xml" data={BwLogo} />
      </div>
      <div className="box-restoration">
        <a className="box-title">Project B&W DM7 Mk2</a>
        <img
          className="box-image-restoration"
          src="BWBeforeAfter.png"
          alt="BWBeforeAfter"
          width="200px"
        ></img>
        <div className="box-text">
          Me, my father (Morten Helvig) and my brother (Tore Helvig) wanted to restorate
          these wonderfull retro speakers from Bowers & Wilkins.
          <p />
          These speakers are called DM7 Mk2 and was released 1979. It is a develpoment of
          the highly-praised DM7, benefiting from B&W&apos;s expanded research facilities.
          <p />
          What is special about the DM7 is that it was the first speakers where the
          tweeter is outside of the cabinet, also called Tweeter-on-Top design, which is
          still used by the most advanced speakers today.
        </div>
        <a className="box-title">Morten, The Carpenter</a>
        <img
          className="box-image-restoration"
          src="MortenHelvig.png"
          alt="MortenHelvig"
          width="200px"
        ></img>
        <div className="box-text">
          The speaker cabinets where really damaged, but nevertheless Morten can fix
          almost anything.
        </div>
        <img
          className="box-image-restoration"
          src="BWTopViewOld.jpg"
          alt="BWTopViewOld"
          width="200px"
        ></img>
        <div className="box-text">
          He started out by sanding it down, and fixing small cracks. He almost saved all
          parts, the top part you can see in the picture could not be saved. The hardest
          part by replacing a side, is that the lines of the wood should match as much as
          possible with the other sides.
        </div>
        <img
          className="box-image-restoration"
          src="BWTopFix.png"
          alt="BWTopFix"
          width="200px"
        ></img>
        <div className="box-text">
          Last of he also had to make the legs/stand from scratch, in the end he found the
          perfect teak color to match the speakers.
        </div>
        <img
          className="box-image-restoration-portrait"
          src="BWStand.jpg"
          alt="BWStand"
          width="200px"
        ></img>
        <a className="box-title">Tore, The Expert</a>
        <img
          className="box-image-restoration"
          src="ToreHelvig.jpg"
          alt="ToreHelvig"
          width="200px"
        ></img>
        <div className="box-text">
          Tore is educated as a Welder, but he has developed to become and expert at so
          many things. He has built his own boat from scratch, so fixing the metal and
          etc. is a piece of cake for Tore.
        </div>
        <img
          className="box-image-restoration"
          src="BWCylinder.png"
          alt="BWCylinder"
          width="200px"
        ></img>
        <div className="box-text">
          The cylinder stand had to be sanded down (not in the picture), and the carefully
          painted with heated paint. We went for the semi-gloss black which we felt fit
          more with the speakers than the original brown. Also pretty sure some of them
          came in semi-gloss black originally.
        </div>
        <img
          className="box-image-restoration"
          src="BWClean.png"
          alt="BWClean"
          width="200px"
        ></img>
        <div className="box-text">
          Next up we cleaned the other parts, here it was important to use the right
          cleaning products so we didn&apos;t damage the elements.
        </div>
        <img
          className="box-image-restoration"
          src="BWTweeters.png"
          alt="BWTweeters"
          width="200px"
        ></img>
        <div className="box-text">
          Lastly the tweeter needed new paint. These came out really nice, but
          unfortunately we had to replace them, and the replacement tweeters we found
          where so nice originally so we didn&apos;t do anything to them. But I wanted to
          keep it here so you can see the difference we got out of the rusty ones.
        </div>
        <a className="box-title">Front panels</a>
        <img
          className="box-image-restoration"
          src="BWFront.jpg"
          alt="BWFront"
          width="200px"
        ></img>
        <div className="box-text">
          I was sure that the front was not possible to save, but Tore found the perfect
          filter to put on top. After taking out all the old staples we stabled this new
          filter on them.
        </div>
        <img
          className="box-image-restoration"
          src="BWMagnet.png"
          alt="BWMagnet"
          width="200px"
        ></img>
        <div className="box-text">
          The old attachments where not working so we went for magnets to hold the front
          panel on. This fit perfect, and made it easy to take them of to show the beauty
          inside.
        </div>
        <img
          className="box-image-restoration"
          src="BWFinished.jpg"
          alt="BWFinished"
          width="200px"
        ></img>
        <div className="box-text">
          That&apos;s all, the restoration is completed. The speakers are also perfoming
          very good, and has an amazing sound.
          <br />
        </div>
        <a className="box-title">Bonus</a>
        <div className="box-text">
          We are looking at making a custom stereo bench, here are some early 3D sketches.
          <br />
        </div>
        <img
          className="box-image-restoration"
          src="BWStereoBench.png"
          alt="BWStereoBench"
          width="200px"
        ></img>
      </div>
      <style jsx>{`
        .content {
          margin: 88px 0px 16px 0px;
          background-color: #222222;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .box-restoration {
          margin: 16px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 644px;
          background-color: #444444;
          color: white;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
        .box-title {
          font-size: 24px;
          font-weight: 400;
          height: fit-content;
          margin: 16px 28px;
          color: white;
          text-decoration: none;
        }
        .box-small-title {
          font-size: 20px;
          font-weight: 300;
          height: fit-content;
          margin: 16px 28px;
          color: white;
          text-decoration: none;
        }
        .box-text {
          font-size: 18px;
          height: fit-content;
          margin: 16px 28px;
          color: white;
          text-decoration: none;
        }
        .box-image-restoration {
          width: 512px;
          align-self: center;
        }
        .box-image-restoration-portrait {
          width: auto;
          height: 400px;
          align-self: center;
        }
        .box-image-text {
          margin: 64px 0px 0px 284px;
          position: absolute;
          color: #dddddd;
        }
        .box-button {
          position: absolute;
          align-self: flex-end;
          margin: 148px 20px 20px 20px;
          cursor: default;
          background: #6fa720;
          color: white;
          width: 110px;
          height: 34px;
          border-radius: 4px;
          border-style: none;
          border: none;
          box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 25%);
        }
        .box-button:hover {
          cursor: pointer;
        }
        .logo {
          margin: 24px 0px;
          width: 640px;
        }
        @media only screen and (max-width: 700px) {
          .logo {
            width: calc(100vw - 64px);
          }
          .box {
            width: calc(100vw - 64px);
          }
          .box-restoration {
            margin: 16px 0px;
            width: calc(100vw - 64px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #444444;
            color: white;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          .box-image {
            position: absolute;
            visibility: hidden;
          }
          .box-image-restoration {
            width: 80%;
            align-self: center;
          }
          .box-image-restoration-portrait {
            width: auto;
            height: 200px;
            align-self: center;
          }
          .box-image-text {
            margin: 64px 0px 0px 64px;
          }
        }
        @media only screen and (max-width: 500px) {
          .box-restoration {
            margin: 16px 0px;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            background-color: #444444;
            color: white;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
          }
          .box-image-text {
            position: absolute;
            visibility: hidden;
          }
          .box-button {
            left: 50%;
            transform: translate(-50%, 0);
            margin: 68px 0px 20px 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default Restoration;
