import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { BiData, BiSolidCustomize, BiSolidTimer,BiSupport } from "react-icons/bi";

import priorizacion_imagen from 'assets/imgs/priorizacion_imagen.png'

const features = [
 
  {
    name: 'Personalización y flexibilidad.',
    description: 'Desde la selección de preguntas hasta el diseño y las instrucciones, podrás adaptar cada evaluación a tus requerimientos particulares.',
    icon: BiSolidCustomize,
  },
  {
    name: 'Amplia base de datos.',
    description: 'Accede a una extensa base de datos de preguntas y respuestas, cubriendo una amplia gama de asignaturas y niveles educativos.',
    icon: BiData,
  },
  {
    name: 'Ahorra tiempo y esfuerzo.',
    description: 'Nuestra herramienta simplifica el proceso de creación de evaluaciones. Olvídate de invertir horas en la elaboración manual de pruebas.',
    icon: BiSolidTimer,
  },
  {
    name: 'Soporte y actualizaciones continuas.',
    description: 'Ofrecemos soporte técnico eficiente y actualizaciones periódicas para garantizar que nuestra aplicación esté siempre a la vanguardia.',
    icon: BiSupport,
  },

]

export default function Features1() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Eligenos</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Porque elegirnos</p>
              
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={priorizacion_imagen}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1000}
          />
        </div>
      </div>
    </div>
  )
}

