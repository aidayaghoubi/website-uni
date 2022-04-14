import Modal from "./Modal";
import ProductDirectory from "../Home/Prodoct/productdirectory.js";
import MainComponent from "../Mainomponent";
import SearchEmpty from "./EmptySearch";
import SearchCard from "./final-seatch";
import { FunctionalContext } from "../store/product-context";
import { Globaldata } from "../store/availableProduct";
import { useEffect, useState , useContext } from "react";


const SearchCart = ({closeModal}) => {

    const [state , setState] =useState('');
    const [searchedrezult, setSearchedrezult] = useState(null)
    const availbalePCTX = useContext(Globaldata);

    
    useEffect(()=>{

        if(state){

            const searchedDate = availbalePCTX.filter((item) => item.P_name.toLowerCase().includes(state.toLowerCase()));
            setSearchedrezult(searchedDate)
        }else{
            setSearchedrezult('')
        }
        
        
    } , [state])
    
    const setInput = (props) => {

        if(props){
            setState(props)
        }else{
            setState('')
        }
        
    }

    const setCloseHandler = (props) => {
        closeModal(props)
    }

    return <Modal>
        <MainComponent>

            <SearchCard word={setInput} setClose={setCloseHandler}/>
            {searchedrezult == 0 && <SearchEmpty />}
            {
                searchedrezult &&  <ProductDirectory data={searchedrezult} />
            }
        </MainComponent>
    </Modal>
}


export default SearchCart;



