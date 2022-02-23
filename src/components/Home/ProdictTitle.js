
import classes from '../Home/ProdictTitle.module.scss'

const ProdoctTitle  = (props) => {

    const title = props.data.name;


    return (
        <div className={classes.titleContainer}>
            <p>
              <span style={{textTransform: 'uppercase'}}>{title}</span>  
              'S COLLECTION
            </p>
        </div>
    )

}

export default ProdoctTitle;