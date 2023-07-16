import { Typewriter } from 'react-simple-typewriter'
import evaluacion_bg from 'assets/imgs/evaluacion_background.jpg';
import banco_bg from 'assets/imgs/banco_background.jpg';
import personalizacion_bg from 'assets/imgs/personalizacion_background.png';

const posts = [
  {
    title: 'Evaluaciones personalizadas',
    href: '#',
    category: { name: 'Evaluaciones', href: '#' },
    description:
      'Utiliza nuestra aplicación web para generar evaluaciones de asignaturas de manera rápida y sencilla. Simplemente elige la asignatura, el contenido y las preguntas que deseas incorporar, ¡y obtén una evaluación lista para usar!',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    src: personalizacion_bg,
    //imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '6 min',
  },
  {
    title: 'Amplio banco de preguntas',
    href: '#',
    category: { name: 'Banco de preguntas', href: '#' },
    description:
      'Nuestra aplicación cuenta con una extensa base de datos de preguntas de múltiple opción y respuestas abiertas. Podrás seleccionar las preguntas relevantes para cada evaluación de nuestra amplia colección y asegurarte de que tus alumnos reciban una evaluación completa y precisa.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    src: banco_bg,
    //imageUrl: 'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '4 min',
    
  },
  {
    title: 'Personalizacion total',
    href: '#',
    category: { name: 'Personalizacion', href: '#' },
    description:
      'Brindamos total flexibilidad para personalizar tus evaluaciones. Además de elegir las preguntas de la base de datos, puedes ajustar el formato, establecer puntajes, agregar instrucciones y mucho más. Obtén evaluaciones únicas y adaptadas a tus necesidades específicas..',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    src: evaluacion_bg,
    //imageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
    readingTime: '11 min',
    
  },
]

export default function Casosuso() {
  return (
    <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <Typewriter
              words={['Nuestros servicios']}
              loop={1}
              cursor
              cursorStyle='.'s
              typeSpeed={50}
              deleteSpeed={100}
              delaySpeed={100}
            // onLoopDone={handleDone}
            // onType={handleType}
            />
            </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Evaluaciones personalizadas al instante
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.src} alt="" />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="text-lg inline-flex font-medium leading-6 text-gray-900  border-b-2 border-white hover:border-indigo-button transition duration-300 ease-in-out">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                
               
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}