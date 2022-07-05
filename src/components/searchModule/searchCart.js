import Modal from "./Modal";
import ProductDirectory from "../Home/Prodoct/productdirectory.js";
import MainComponent from "../Mainomponent";
import SearchEmpty from "./EmptySearch";
import SearchCard from "./final-seatch";
import { FunctionalContext } from "../store/product-context";
import { Globaldata } from "../store/availableProduct";
import { useEffect, useState , useContext } from "react";
import ProductShow from "./productShow";


const SearchCart = ({closeModal}) => {

    const [state , setState] =useState('');
    const [searchedResult, setSearchedResult] = useState(null)
    const availableCTX = useContext(Globaldata);

    
    useEffect(()=>{

        if(state){

            const searchedDate = availableCTX.filter((item) => item.P_name.toLowerCase().includes(state.toLowerCase()));
            setSearchedResult(searchedDate)
        }else{
            setSearchedResult('')
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
            {searchedResult == 0 && <SearchEmpty />}
            {
                searchedResult &&  <ProductShow data={searchedResult} />
            }
        </MainComponent>
    </Modal>
}


export default SearchCart;



