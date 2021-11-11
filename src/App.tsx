import React from 'react';
import TopBar from './components/Navigation/TopBar';
import BottomBar from './components/Navigation/BottomBar';
import Intro from './components/Pages/Intro';
import Games from './components/Pages/Games';
import Restoration from './components/Pages/Restoration';
import Mods from './components/Pages/Mods';
import About from './components/Pages/About';
import Martin from './components/Pages/Martin';
import useTazhelContext from './context/tazhelContext';

function App() {
  const { page } = useTazhelContext();
  return (
    <div className="app">
      <div>
        <TopBar />
        {
          {
            0: <Intro />,
            1: <Games />,
            2: <Mods />,
            3: <Restoration />,
            4: <About />,
            5: <Martin />,
          }[page]
        }
      </div>
      <div>
        <BottomBar />
      </div>
      <style jsx>{`
        .app {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}

export default App;
