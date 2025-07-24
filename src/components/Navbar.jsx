// import { useEffect } from "react";

// export const Navbar = ( menuOpen, setMenuOpen) => {
//     // for constant check
//     useEffect(()=>{
//         document.body.styl.overflow = menuOpen ? "hidden" : ""
//     }, [menuOpen])
//     return (
//         <nar className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shodow-lg">
//         <div className="max-w-5xl mx-auto px-4">
//             <div className="flex justify-between items-center h-16">
//                 <a
//                  href ="#home" className="font-mono text-xl font-bold text-white"> 
//                     (" ")
//                     John<span className="text-blue-400">Hardy</span>.dev (" ")
//                 </a>
//                 {/* smaller screen meun */}
//                 <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((perv) => !prev)}>
//                     &#9776;
//                 </div>
//                  {/* desktop meun */}
//                 <div className="hidden md:flex items-center space-x-8">
//                     <a href="#home" className="text-gray-300 hover:text-while">
//                       {" "}  Home  {" "}</a>
//                       <a href="#about" className="text-gray-300 hover:text-while">
//                       {" "}  About {" "}</a>
//                       <a href="project" className="text-gray-300 hover:text-while">
//                       {" "}  Projects  {" "}</a>
//                       <a href="#contact" className="text-gray-300 hover:text-while">
//                       {" "}  Contact  {" "}</a>
//                 </div>

//             </div>
//         </div>
//     </nar>

//     );
// };