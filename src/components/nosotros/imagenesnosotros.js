import docentenosotros1 from 'assets/imgs/docentes_nosotros1.jpg';
import docentenosotros2 from 'assets/imgs/docentes_nosotros2.jpg';

function Imagenesnosotros() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 gap-8 pl-8 pr-8">
                <img src= {docentenosotros1} className="w-full h-96 object-cover " />
                <img src= {docentenosotros2} className="w-full h-96 object-cover " />

            </div>
        </div>
    );
}

export default Imagenesnosotros