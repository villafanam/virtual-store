import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log('id;-----', id);
  
  return (
    <>
      <h2>ProductDetails is ONLINE.....</h2>
    </>
  );
};

export default ProductDetails;