import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer1';
import Header from './components/header/Header1';
import './index.css';
import AboutPage from './pages/about-page/AboutPage1.tsx';
import GamesPage from './pages/games-page/GamesPage1';
import HomePage from './pages/home-page/HomePage1';
import ModsPage from './pages/mods-page/ModsPage1';
import OtherPage from './pages/other-page/OtherPage1';

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
