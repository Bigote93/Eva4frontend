import Header from "components/home/header";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import Layout from "../../hocs/layouts/Layout";
import Features1 from "components/home/features";
import Casosuso from "components/home/casosuso";
import CTA from "components/home/CTA";
import {useEffect} from 'react';

function Home (){
    useEffect(()=> {
        window.scrollTo(0,0)
    },[]);

    return (
        <Layout>
            <Navbar/>
            <div className="pt-32">
                <Header/>
                <hr/>
                <Features1/>
                <hr/>
                <Casosuso/>
                <hr/>
                <CTA/>
            </div>
            
            <Footer/>
        </Layout>
    );
}

export default Home;