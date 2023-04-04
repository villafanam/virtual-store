import { connect } from "react-redux";
import { Card, Stack, Typography } from "@mui/material";


const Products = ({ products }) => {
  return (
    <>
      <h1>Products</h1>
      <Stack spacing={2}  direction="row" >
        { //{ name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
          products.map((item, idx) => (
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

const mapStateToProps = ({ categories }) => {
  return {
    products: categories.products,
    activeCategory: categories.activeCategory,
  };
};



export default connect(mapStateToProps)(Products);