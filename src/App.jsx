import { useState } from 'react';
import './App.css';
import { LoadingScreen } from'./components/LoadingScreen';
import {Navbar} from "./components/Navbar"
import { MobileMeun } from './components/section/MobileMeun';
import { Home } from "./components/section/Home"
import { About } from './components/section/About';
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  // to keep track of the menu
    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
    {!isLoaded &&  <LoadingScreen onComplete={() => setIsLoaded(true)}  />}

      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-1" : "opacity-0"}  bg-black text-gray-100`} >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <MobileMeun menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                <Home   />
                <About   />


      </div>
    </>
  );
};

export default App
