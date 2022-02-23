import ProductWrap from "./productwraper";

const ProductList = ({ data }) => {

    console.log(data)

    return (
        <div>
            {data.map(item => {
                return <ProductWrap data={item} />
            })}
        </div>
    )
}

export default ProductList;