import '../../index.css';
import './homePage.css';

const HomePage: React.FC = () => {
    const youtubeVideoId = 'HagSECM08yE';
    const origin = encodeURIComponent('https://www.tazhel.com');

    const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&fs=0&vq=hd1080&origin=${origin}`;

    return (
        <div className="page-container">
            <iframe
                className="page-youtube"
                src={embedUrl}
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>
    );
};

export default HomePage;
