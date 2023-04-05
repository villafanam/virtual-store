import { useDispatch, useSelector } from "react-redux";
import { Card, Stack, Typography } from "@mui/material";


const Products = () => {
  const { products, categories } = useSelector((state) => state); 
  const { filterProducts} = useSelector((state) => state.products); 
  const dispatch = useDispatch();
  let { activeCategory } = categories;
  console.log('products: ----', products);
  return (
    <>
      {activeCategory && <h1>{activeCategory.displayName}</h1>}
      {activeCategory && <p>Category description goes here! </p>}
      
      <Stack spacing={2}  direction="row" >
       {
          activeCategory &&  filterProducts.map((item, idx) => (
            <Card key={`product-${idx}`} variant="outlined" sx={{ width: 150,  backgroundColor: "#cccccc" }}>
              <Typography gutterBottom>Name: {item.name}</Typography>
              <Typography gutterBottom>Category: {item.category}</Typography>
              <Typography gutterBottom>Price: ${item.price}</Typography>
              <Typography gutterBottom>inStock: {item.inStock}</Typography>
            </Card>
          ))
        }
      </Stack>

    </>
  );
};




export default Products;