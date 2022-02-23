import SiteIntro from "./Home/SiteIntro";
import AboutUs from "./Home/Aboutus";
import ProdoctList from "./Home/Prodoct.js/MenProdoct";
import ProdoctTitle from "./Home/ProdictTitle";
import Database from "./store/availableProduct";
import { Globaldata } from "./store/availableProduct";


const Home = () => {


    return (<section>
        <Database>
            <SiteIntro />
            <AboutUs />
            <ProdoctList />
        </Database>
    </section>)
}

export default Home;