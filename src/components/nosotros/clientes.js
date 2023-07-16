import inacapicono from 'assets/imgs/iconos/inacapicono.png';
import mineducicono from 'assets/imgs/iconos/mineducicono.png';
import servicioicono from 'assets/imgs/iconos/senvicioninez.png';
import ucshicono from 'assets/imgs/iconos/ucshicono.png';
import { Link } from 'react-router-dom';


export default function Nuestrosclientes() {
    return (
      <div className="bg-white">
        <div className="mx-8 max-w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Empresas que confian en nosotros
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a
                scelerisque amet ullamcorper eu enim et fermentum, augue.
              </p>
              <div className="mt-8 sm:flex">
                
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              <Link to="https://portales.inacap.cl/" className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={inacapicono} alt="Inacap" />
              </Link>
              <Link to="https://www.ucsh.cl/" className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={ucshicono} alt="UCSH"/>
              </Link>
              <Link to="https://www.mineduc.cl/" className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img className="max-h-12" src={mineducicono} alt="MINEDUC" />
              </Link>
              <Link to="https://www.mejorninez.cl/" className="col-span-1 flex justify-center bg-gray-50 py-8 px-8">
                <img
                  className="max-h-12"
                  src={servicioicono}
                  alt="Servicio nacional de la niñez"
                />
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
  