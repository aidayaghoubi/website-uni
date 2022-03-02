import Modal from "./Modal";
import ProductDirectory from "../Home/Prodoct/productdirectory.js";
import MainComponent from "../Mainomponent";
import SearchEmpty from "./EmptySearch";

const SearchCart = ({ serachedItem }) => {

    
    return <Modal>
        <MainComponent>
            {serachedItem == 0 &&  <SearchEmpty />}
           
            <ProductDirectory data={serachedItem} />
        </MainComponent>
    </Modal>
}


export default SearchCart;