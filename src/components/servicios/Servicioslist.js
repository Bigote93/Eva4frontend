import Servicioscard from "./Serviciocard";
import ReactElasticCarousel from "@itseasy21/react-elastic-carousel";
import evaluacion_bg from 'assets/imgs/evaluacion_background.jpg';
import banco_bg from 'assets/imgs/banco_background.jpg';
import personalizacion_bg from 'assets/imgs/personalizacion_background.png';
import comunidad_bg from 'assets/imgs/comunidaddocente_background.jpg';
import portafolio_bg from 'assets/imgs/portafolio_background.png'



function ServiciosList() {


    const posts = [
        {
            id: 'IMAGEN01',
            title: 'Acceso a banco de preguntas.',
            href: '#',
            category: { name: 'Banco preguntas', href: '#' },
            description:
                'Nuestra aplicación cuenta con una extensa base de datos de preguntas de múltiple opción y respuestas abiertas. Podrás seleccionar las preguntas relevantes para cada evaluación de nuestra amplia colección y asegurarte de que tus alumnos reciban una evaluación completa y precisa.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            src: banco_bg,
            readingTime: '6 min',
        },
        {
            id: 'IMAGEN02',
            title: 'Personalizacion de evaluaciones',
            href: '#',
            category: { name: 'Personalizacion', href: '#' },
            description:
                'Utiliza nuestra aplicación web para generar evaluaciones de asignaturas de manera rápida y sencilla. Simplemente elige la asignatura, el contenido y las preguntas que deseas incorporar, ¡y obtén una evaluación lista para usar!.',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            src: personalizacion_bg,
            readingTime: '4 min',
        },
        {
            id: 'IMAGEN03',
            title: 'Creacion de portafolio de evaluaciones',
            href: '#',
            category: { name: 'Portafolio docente', href: '#' },
            description:
                'Crea portafolios de evaluaciones y exámenes personalizados con nuestra herramienta intuitiva y eficiente. Potencia la efectividad de la evaluación, mejora el seguimiento del progreso estudiantil y optimiza la retroalimentación educativa.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            src: portafolio_bg,
            readingTime: '11 min',
        },
        {
            id: 'IMAGEN04',
            title: 'Comunidad de creadores',
            href: '#',
            category: { name: 'Comunidad RappidEva', href: '#' },
            description:
                'Únete a nuestra comunidad de docentes para intercambiar conocimientos, recursos y experiencias educativas en un ambiente colaborativo. Potencia tu desarrollo profesional con colegas de todo el mundo.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            src: comunidad_bg,
            readingTime: '11 min',
        },
    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemToScroll: 1 },
        { width: 550, itemsToShow: 1, itemToScroll: 1, pagination: false },
        { width: 1150, itemsToShow: 2, itemToScroll: 2 },
        { width: 1450, itemsToShow: 3, itemToScroll: 2 },
    ];

    return (
        <div className="relative px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3"></div> 
            </div>
            <div className="relative mx-12 max-w-full">

                <ReactElasticCarousel
                    itemsToScroll={3}
                    itemsToShow={3}
                    breakPoints={breakPoints}
                    pagination={false}
                    itemPadding={[0, 20]}
                >
                    {posts.map((post, index) => (
                        <Servicioscard index={index} datosservicios={post} />
                    ))}
                </ReactElasticCarousel>
            </div>
        </div >
    );

}

export default ServiciosList;