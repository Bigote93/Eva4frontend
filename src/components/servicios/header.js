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
                                    <Typewriter
                                        words={['Nuestros servicios']}
                                        loop={1}
                                        cursor
                                        cursorStyle='.'
                                        typeSpeed={50}
                                        deleteSpeed={0}
                                        delaySpeed={50}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />

                                </div>
                            </h1>

                            <p className="mt-6 text-4xl leading-10 text-gray-900 max-w-5xl">
                                Desde evaluaciones personalizadas hasta herramientas interactivas y recursos enriquecedores, ofrecemos soluciones confiables que te ayudarán a alcanzar tus objetivos educativos con éxito.

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