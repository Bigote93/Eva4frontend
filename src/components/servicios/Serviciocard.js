import { Link } from "react-router-dom";

function Servicioscard({ datosservicios, index }) {
    return (
        <Link to = "/servicios/index"
        onMouseEnter={()=>{
            const title_element= document.getElementById(datosservicios.id);
            title_element.classList.add('text-gray-100');
            const imagen = document.getElementById(datosservicios.id);
            imagen.classList.add('object-scale-up');
        }}
        onMouseLeave = {()=>{
            const title_element= document.getElementById(index);
            title_element.classList.remove('text-gray-100');
            const imagen = document.getElementById(datosservicios.id);
            imagen.classList.remove('object-scale-up');

        }}
        
         className="flex flex-col overflow-hidden rounded-lg shadow-lg ">
            <div className="flex-shrink-0">
                <img id = {datosservicios.id} className="h-96 w-full object-cover" src={datosservicios.src} alt="" />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-xl font-medium text-indigo-900">
                        <a href={datosservicios.category.href} className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">
                            {datosservicios.category.name}
                        </a>
                    </p>
                    <a href={datosservicios.href} className="mt-2 block">
                        <p id = {index} className="lg:text-3xl pt-2 pb-4 text-2xl font-semibold text-gray-900 transition duration-500 easy-in-out">{datosservicios.title}</p>
                        <p className="mt-3 text-xl leading-9 text-gray-900">{datosservicios.description}</p>
                    </a>
                </div>

            </div>
        </Link>
    );

}

export default Servicioscard;