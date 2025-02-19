import '../../index.css';
import './homePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="page-container">
            <iframe
                className="page-youtube"
                src="https://www.youtube.com/embed/HagSECM08yE?autoplay=1&mute=1&rel=0&controls=0&modestbranding=1&fs=0&vq=hd1080"
                title="YouTube video player"
                style={{ border: 'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default HomePage;
