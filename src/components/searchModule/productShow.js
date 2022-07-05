import styledComponents from "styled-components";
import ProductWrap from "../Home/Prodoct/productwraper";
import MainComponent from "../Mainomponent";

const Wrapper = styledComponents.div`

height :520px;
overflow-Y: scroll;
display: flex;
flex-wrap: wrap;
padding: 0 36px;
justify-content: space-between;

 &::-webkit-scrollbar {
    width: 9px;
  }
  
  /* Track */
  &::-webkit-scrollbar-track {
    background: #292828;
  
    border-radius:15px;
  }
  
  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #474343;
    border-radius:15px;
  }
  
  /* Handle on hover */
  & ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ProductShow = ({ data }) => {
  console.log(data, "dejeifjerufr");

  return (
    <MainComponent>
      <Wrapper>
        {data.map((item) => {
          return <ProductWrap data={item} key={item.style_code} />;
        })}
      </Wrapper>
    </MainComponent>
  );
};

export default ProductShow;
