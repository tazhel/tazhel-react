import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer.tsx';
import Header from './components/header/Header.tsx';
import './index.css';
import AboutPage from './pages/about-page/AboutPage.tsx';
import GamesPage from './pages/games-page/GamesPage.tsx';
import HomePage from './pages/home-page/HomePage.tsx';
import ModsPage from './pages/mods-page/ModsPage.tsx';
import OtherPage from './pages/other-page/OtherPage.tsx';

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
