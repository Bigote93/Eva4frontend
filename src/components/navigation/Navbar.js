import { useState, } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo_nube from 'assets/imgs/logo_nub.png';
import logo_loading from 'assets/imgs/loading_cat2.gif';


function Navbar() {

    const [loading, setLoading] = useState(true);

    return (
        <nav className='w-full py-4 shadow-xl top-0 fixed'>
            <div className="bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-12 px-2">
                    
                        <Link to="/" className='ml-4 mt-2'>
                            <img
                                src={logo_nube}
                                width={80}
                                height={70}
                                className="" />
                        </Link>
                    
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <NavLink to="/nosotros" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Quienes somos</NavLink>
                        <NavLink to="/servicios" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Servicios</NavLink>
                        <NavLink to="/contacto" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Contacto</NavLink>
                        <NavLink to="/portalcolegio" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Portal colegio</NavLink>
                        <NavLink to="/portaldocente" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Portal docente</NavLink>
                        <NavLink to="/ayuda" className="text-lg inline-flex font-medium leading-6 text-gray-900 mx-4 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">Ayuda</NavLink>

                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-button px-6 py-2 text-lg font-bold text-white shadow-sm hover:transition hover:duration-300 hover:ease-in-out hover:bg-indigo-button-hover focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Ingresar
                            <img
                                src={logo_loading}
                                className='w-6 h-6 mt-1 ml-3' />

                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {

})(Navbar)