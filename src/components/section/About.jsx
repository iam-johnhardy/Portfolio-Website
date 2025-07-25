import tailwindcss from "@tailwindcss/vite"


export const About = () => {
    const frontendSkills =["Material UI","React", "Figma", "TailwindCSS"];
        const backendSkills =["MongoDB", "Express","GrapQL", "Node",  "AWS"] 


    return <section id="about" className="min-h-screen flex items-center py-20">

        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> {" "} about Me</h2>
            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
                <p className="text-gray-300 mb-6">
                    Passionate developer with expertise in building scalable web applications and creating innovatio solutions.
                </p>
                <div className="grid grid-cols md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:translate-y-1 tranistion-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) =>{
                                <span key={key}
                                 className="bg-blue500/100 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8Px_rgba(59,130,2246,0.2)] transition
                                " >
                                    {tech}

                                </span>
                            }

                            )}
                        </div>
                    </div>
                    <div className="rounded-xl p-6 hover:translate-y-1 tranistion-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) =>{
                                <span key={key}
                                 className="bg-blue500/100 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8Px_rgba(59,130,2246,0.2)] transition
                                " >
                                    {tech}

                                </span>
                            }

                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 transition-all">
                <h3 className="text-xl front-bold mb-4"> 👩‍🎓Education</h3>
                <ul>
                    <li>
                        <b></b>
                    </li>
                </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1 transition-all">
                <h3 className="text-xl front-bold mb-4"> 👨‍💻Work Experience</h3>
                </div>

            </div>
        </div>
    </section>
}