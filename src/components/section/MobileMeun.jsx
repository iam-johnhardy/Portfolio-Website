import { useEffect } from "react";

export const MobileMeun = (menuOpen, setMenuOpen) => {
    // for constant check

    return (
        <div className={`fixed top-0 left-0 w-full bg[raba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ?
                "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"}
        `}
        >
            <button onClick={() => setMenuOpen(false)} className="absolue top-6  right-6 text-white text-3xl focus:outline-none cursor-pointer " aria-label="Close Menu">
                &times;
            </button>
            <a
                href="#home"
                onClick={()=> setMenuOpen(false)}
                 className="text-gray-300 hover:text-while">
              Home  </a>
            <a href="#about" className="text-gray-300 hover:text-while">
                 About </a>
            <a href="project" className="text-gray-300 hover:text-while">
              Projects </a>
            <a href="#contact" className="text-gray-300 hover:text-while">
                  Contact
            </a>

        </div>

    );
};