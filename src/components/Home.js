import SiteIntro from "./Home/SiteIntro";
import AboutUs from "./Home/Aboutus";
import ProdoctList from "./Home/Prodoct/Prodoct";
import ProdoctTitle from "./Home/ProdictTitle";

import Database from "./store/availableProduct";
import { Globaldata } from "./store/availableProduct";
import { useEffect } from "react";


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (<section>
        <Database>
            <SiteIntro />
            <AboutUs />
            <ProdoctList category='men'/>
            <ProdoctList category='women'/>
            <ProdoctList category='kid'/>
        </Database>
    </section>)
}

export default Home;