import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Portaldocente (){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-32">
                Portaldocente
            </div>
            
            <Footer/>
        </Layout>
    );
}

export default Portaldocente;