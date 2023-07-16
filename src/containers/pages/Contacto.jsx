import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";

function Contacto() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <Layout>

            <Helmet>
                <title>¡RappidEva! | Contacto</title>
                <meta name="description" content="Genera tus propias evaluaciones con RappidEva!" />
                <meta name="keywords" content="profesor, evaluaciones, software educativo" />
                <meta name="robots" content="all" />
                <link rel="canonical" href="https://rappideva.web.app/"></link>
                <meta name="author" content="Diego Nalli" />
                <meta name="publisher" content="Diego Nalli" />

                {/* Social media tags */}
                <meta property="og:title" content="¡RappidEva! | Software Educacional" />
                <meta property="og:description" content="Genera tus propias evaluaciones con RappidEva!" />
                <meta property="og:url" content="https://rappideva.web.app/" />
                <meta property="og:image" content="https://bafybeiga4w7o2esxj2nv5oybvycaqbv3zonseep45abaterslus34vnu6a.ipfs.w3s.link/logo_nub.png" />
                <meta name="twitter:title" content="¡RappidEva! | Software Educacional" />
                <meta name="twitter:description" content="Genera tus propias evaluaciones con RappidEva!" />
                <meta name="twitter:image" content="https://bafybeiga4w7o2esxj2nv5oybvycaqbv3zonseep45abaterslus34vnu6a.ipfs.w3s.link/logo_nub.png" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>

            <Navbar />
            <div className="pt-32">
                Contacto
            </div>

            <Footer />
        </Layout>
    );
}

export default Contacto;