import Modal from "./Modal";
import ProductDirectory from "../Home/Prodoct/productdirectory.js";
import MainComponent from "../Mainomponent";

const SearchCart = ({ serachedItem }) => {



    return <Modal>
        <MainComponent>
            <ProductDirectory data={serachedItem} />
        </MainComponent>
    </Modal>
}


export default SearchCart;