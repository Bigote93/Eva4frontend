import { Link } from "react-router-dom";

import { Typewriter } from 'react-simple-typewriter'
import nubes_bg from 'assets/imgs/nubesbackground.png';


function Header() {


    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-12 max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12 ">
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight  sm:text-6xl">
                                
                                <div style={{ color: 'Indigo', fontWeight: 'bold' }}>
                                ¿Que 
                                    <Typewriter
                                        words={[' es RappidEva?', ' produce RappidEva?', ' te permite RappidEva?']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='.'
                                        typeSpeed={120}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />

                                </div>
                            </h1>

                            <p className="mt-6 text-3xl leading-10 text-gray-900 max-w-5xl">
                            Somos el equipo detrás de esta web app innovadora que te ofrece la creación de evaluaciones y exámenes online mediante un banco de preguntas comunitario. Simplificamos el proceso de evaluación para que puedas enfocarte en el aprendizaje de tus estudiantes.
                            </p>

                        </div>
                        <div className="absolute inset-x-0 top-[calc(100%-40rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg lg:top-[calc(100%-40rem)] sm:top-[calc(100%-30rem)]">
                            <img src={nubes_bg} className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;