// import classes from './AboutUs.module.scss';
import MainComponent from '../../Mainomponent';

const ProductWrap = ({data}) => {

    return (
        <MainComponent>
         <div>
             <p>{data.P_name}</p>
             <img src={data.img_url} style={{width:125}}></img>
            <p>{data.price}</p>
         </div>
        </MainComponent>
    )
}

export default ProductWrap;