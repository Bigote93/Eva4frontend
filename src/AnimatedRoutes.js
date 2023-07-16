import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

import Home from './containers/pages/Home';
import Error404 from './containers/errors/Error404';

import Nosotros from './containers/pages/Nosotros';
import Servicios from './containers/pages/Servicios';
import Contacto from './containers/pages/Contacto';
import Portalcolegio from './containers/pages/Portalcolegio';
import Portaldocente from './containers/pages/Portaldocente';
import Ayuda from './containers/pages/Ayuda';
import Rappidchat from "containers/pages/Rappidchat";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {

    const ubicacion = useLocation()
    return (
        <AnimatePresence>

            <Routes location={ubicacion} key={ubicacion.pathname}>
                {/* Error Display */}
                <Route path="*" element={<Error404 />} />

                {/* Home Display */}
                <Route path="/" element={<Home />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/portalcolegio" element={<Portalcolegio />} />
                <Route path="/portaldocente" element={<Portaldocente />} />
                <Route path="/ayuda" element={<Ayuda />} />
                <Route path="/RappidChat" element={<Rappidchat />} />

            </Routes>

        </AnimatePresence>

    );
}

export default AnimatedRoutes;