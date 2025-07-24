


export const Home = ()=>{
    return(
        <section id="home" 
        className="min-h-screen flex items-center justify-center relative">
            
            <div className="text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Hi, i'm John Hardy</h1>

                <p className="text-gray-400 text-lg mb-8 max-w-lag mx-auto">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, porro harum neque deserunt optio nihil, voluptatem nulla incidunt aspernatur est aliquam laudantium omnis doloribus, ipsa sed rem fugit deleniti iure.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#project" className="bg-blue-500 text-white py-3 px-6 rounded font-medim transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.4" >view Projects</a>
                     <a href="#contact" className="board border-blue-500/50 py-3 px-6 rounded font-medius transition-all duration-200 hover:translate-y-0.5 hover:shadow-[0_0_15px_rgb(59, 130, 246, 0.2 hover:bg-blue-500/10" >Contact Me</a>
                </div>
            </div>
        </section>
    );
};