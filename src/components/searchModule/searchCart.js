import Modal from "./Modal";
import ProductDirectory from "../Home/Prodoct/productdirectory.js" ;

const SearchCart = ({serachedItem}) => {

    

    return <Modal>
          <ProductDirectory data={serachedItem}/> 
    </Modal>
}


export default SearchCart;