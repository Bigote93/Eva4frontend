import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";

function Portalcolegio (){
    return (
        <Layout>
            <Navbar/>
            <div className="pt-32">
                Portalcolegio
            </div>
            
            <Footer/>
        </Layout>
    );
}

export default Portalcolegio;