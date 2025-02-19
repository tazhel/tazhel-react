import '../../index.css';
import BwLogo from '../../svg/BwLogo.svg';
import './otherpage.css';

const OtherPage: React.FC = () => {
    return (
        <div className="page-container">
            <div className="other-logo">
                <object className="other-topbar-logo-object" type="image/svg+xml" data={BwLogo} />
            </div>
            <div className="other-box">
                <a className="other-box-title">Project B&W DM7 Mk2</a>
                <img className="other-box-image" src="BWBeforeAfter.png" alt="BWBeforeAfter" width="200px"></img>
                <div className="other-box-text">
                    Me, my father (Morten Helvig) and my brother (Tore Helvig) wanted to restorate these wonderfull
                    retro speakers from Bowers & Wilkins.
                    <p />
                    These speakers are called DM7 Mk2 and was released 1979. It is a develpoment of the highly-praised
                    DM7, benefiting from B&W&apos;s expanded research facilities.
                    <p />
                    What is special about the DM7 is that it was the first speakers where the tweeter is outside of the
                    cabinet, also called Tweeter-on-Top design, which is still used by the most advanced speakers today.
                </div>
                <a className="other-box-title">Morten, The Carpenter</a>
                <img className="other-box-image" src="MortenHelvig.png" alt="MortenHelvig" width="200px"></img>
                <div className="other-box-text">
                    The speaker cabinets where really damaged, but nevertheless Morten can fix almost anything.
                </div>
                <img className="other-box-image" src="BWTopViewOld.jpg" alt="BWTopViewOld" width="200px"></img>
                <div className="other-box-text">
                    He started out by sanding it down, and fixing small cracks. He almost saved all parts, the top part
                    you can see in the picture could not be saved. The hardest part by replacing a side, is that the
                    lines of the wood should match as much as possible with the other sides.
                </div>
                <img className="other-box-image" src="BWTopFix.png" alt="BWTopFix" width="200px"></img>
                <div className="other-box-text">
                    Last of he also had to make the legs/stand from scratch, in the end he found the perfect teak color
                    to match the speakers.
                </div>
                <img className="other-box-image-portrait" src="BWStand.jpg" alt="BWStand" width="200px"></img>
                <a className="other-box-title">Tore, The Expert</a>
                <img className="other-box-image" src="ToreHelvig.jpg" alt="ToreHelvig" width="200px"></img>
                <div className="other-box-text">
                    Tore is educated as a Welder, but he has developed to become and expert at so many things. He has
                    built his own boat from scratch, so fixing the metal and etc. is a piece of cake for Tore.
                </div>
                <img className="other-box-image" src="BWCylinder.png" alt="BWCylinder" width="200px"></img>
                <div className="other-box-text">
                    The cylinder stand had to be sanded down (not in the picture), and the carefully painted with heated
                    paint. We went for the semi-gloss black which we felt fit more with the speakers than the original
                    brown. Also pretty sure some of them came in semi-gloss black originally.
                </div>
                <img className="other-box-image" src="BWClean.png" alt="BWClean" width="200px"></img>
                <div className="other-box-text">
                    Next up we cleaned the other parts, here it was important to use the right cleaning products so we
                    didn&apos;t damage the elements.
                </div>
                <img className="other-box-image" src="BWTweeters.png" alt="BWTweeters" width="200px"></img>
                <div className="other-box-text">
                    Lastly the tweeter needed new paint. These came out really nice, but unfortunately we had to replace
                    them, and the replacement tweeters we found where so nice originally so we didn&apos;t do anything
                    to them. But I wanted to keep it here so you can see the difference we got out of the rusty ones.
                </div>
                <a className="other-box-title">Front panels</a>
                <img className="other-box-image" src="BWFront.jpg" alt="BWFront" width="200px"></img>
                <div className="other-box-text">
                    I was sure that the front was not possible to save, but Tore found the perfect filter to put on top.
                    After taking out all the old staples we stabled this new filter on them.
                </div>
                <img className="other-box-image" src="BWMagnet.png" alt="BWMagnet" width="200px"></img>
                <div className="other-box-text">
                    The old attachments where not working so we went for magnets to hold the front panel on. This fit
                    perfect, and made it easy to take them of to show the beauty inside.
                </div>
                <img className="other-box-image" src="BWFinished.jpg" alt="BWFinished" width="200px"></img>
                <div className="other-box-text">
                    That&apos;s all, the restoration is completed. The speakers are also perfoming very good, and has an
                    amazing sound.
                    <br />
                </div>
                <a className="other-box-title">Bonus</a>
                <div className="other-box-text">
                    We are looking at making a custom stereo bench, here are some early 3D sketches.
                    <br />
                </div>
                <img className="other-box-image" src="BWStereoBench.png" alt="BWStereoBench" width="200px"></img>
            </div>
        </div>
    );
};

export default OtherPage;
