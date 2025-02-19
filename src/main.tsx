import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import './index.css';
import AboutPage from './pages/about-page/aboutPage';
import GamesPage from './pages/games-page/gamesPage';
import HomePage from './pages/home-page/homePage';
import ModsPage from './pages/mods-page/modsPage';
import OtherPage from './pages/other-page/otherPage';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/mods" element={<ModsPage />} />
                <Route path="/other" element={<OtherPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </StrictMode>,
);
