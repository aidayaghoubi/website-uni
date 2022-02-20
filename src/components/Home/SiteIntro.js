import classes from './SiteIntro.module.scss';
import MainImage from '../../assets/Group 84.png';
import SiteIntroAction from './SiteIntroAction';
import MainComponent from '../Mainomponent';
import Container from './container';
import InnerCountainer from './InnerContainer';

const SiteIntro = () => {

    return (
        <MainComponent>
          
                <div className={classes.SiteIntro}>
                    <div className={classes.siteTitle}>
                        <span className={classes.webTitle}>AIR JORDAN VIII</span>
                        <h1>JORDAN DOMINATES</h1>
                        <h3>The Field And Leaves His Mark</h3>
                    </div>
                    <div className={classes['image-holder']}>
                        <img src={MainImage} />
                    </div>
                    <SiteIntroAction />
                </div>
         
        </MainComponent>
    )

}

export default SiteIntro;