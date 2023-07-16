import { CheckIcon } from '@heroicons/react/24/outline';


const features = [
  {
    name: 'Invita a nuevos miembros',
    description: 'Invita a tus colegas a unirte a esta plataforma y haz cada vez mas grande tu equipo',
  },
  {
    name: 'Notificaciones',
    description: 'Recibe notificaciones de mensajeria, estados pendientes de tus evaluaciones, cantidad de descargas de tu evaluacion.',
  },
  {
    name: 'Lista de pendientes',
    description: 'Registra y coordina tus tareas pendientes individuales o coorporativa.',
  },
  {
    name: 'Evaluaciones en conjunto',
    description: 'Confecciona evaluaciones en conjunto con tus compañeros de trabajo o coordinadora.',
  },
  {
    name: 'Reportes',
    description: 'Recibe reportes de tu coordinador y equipo de trabajo para un mayor control y agilidad de procesos.',
  },
  {
    name: 'Calendario de evaluaciones',
    description: 'Genera un calendario de evaluaciones y pendientes para ti y tu equipo.',
  },
  {
    name: 'Mensajeria instantanea',
    description: 'Recibe en tiempo real notificaciones de mensajes internos de tu equipo y compañeros de trabajo.',
  },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:mx-12 max-w-full py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto lg:mx-12 max-w-full ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Herramientas RappidChat</h2>
          <p className="mt-4 text-lg text-gray-500">
            Recibe notificaciones, mensajes, alertas, coordina horarios, planifica tu tiempo ¡Y mas!.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}