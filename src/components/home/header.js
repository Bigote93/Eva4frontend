import { Link } from "react-router-dom";

import { Typewriter } from 'react-simple-typewriter';
import nubes_bg from 'assets/imgs/nubesbackground.png';



function Header() {


    return (
        <main>
            <div className="relative px-6 lg:px-8">
                <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                    <div>
                        <div>
                            <h1 className="text-4xl font-bold tracking-tight pb-24 sm:text-center sm:text-7xl">
                                RappidEva <span></span>
                                <div style={{ color: 'indigo', fontWeight: 'bold' }}>
                                    <Typewriter
                                        words={['para profesores', 'para estudiantes', 'para coordinadores', 'para ti!']}
                                        loop={0}
                                        cursor

                                        cursorStyle='_'
                                        typeSpeed={120}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />

                                </div>
                            </h1>
                            <ul className="flex gap-8 item-center justify-center py-12">
                                <li className="inline-flex border-b-2 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out ">
                                    <Link to="/servicios/algo1" className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Banco Evaluaciones
                                    </Link>
                                </li>
                                <li className="inline-flex border-b-2 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out ">
                                    <Link to="/servicios/algo2" className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Banco preguntas
                                    </Link>
                                </li>
                                <li className="inline-flex border-b-2 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out ">
                                    <Link to="/servicios/algo3" className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center">
                                        Producto de muestra
                                    </Link>
                                </li>
                            </ul>
                            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">

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