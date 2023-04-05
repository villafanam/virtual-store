import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct } from "../../store/actions";


const Products = () => {
  const { products, categories } = useSelector((state) => state);
  const { activeCategory } = categories;
  const dispatch = useDispatch();

  return (
    <>
      {activeCategory && <h1>{activeCategory.displayName}</h1>}
      {activeCategory && <p>Category description goes here! </p>}

      <Stack spacing={2} direction="row" >
        {
          activeCategory && products.map((item, idx) => (
            <Card key={`product-${idx}`} variant="outlined" sx={{ width: 150, backgroundColor: "#cccccc" }}>
              <CardContent>
                <Typography gutterBottom>Name: {item.name}</Typography>
                <Typography gutterBottom>Category: {item.category}</Typography>
                <Typography gutterBottom>Price: ${item.price}</Typography>
                <Typography gutterBottom>inStock: {item.inStock}</Typography>
              </CardContent>

              <CardActions >
                <Tooltip title="add to shopping cart">
                  <IconButton 
                  color="primary" 
                  aria-label="add to shopping cart" 
                  onClick={() => dispatch(addProduct(item))}
                  >
                    <AddShoppingCartIcon />
                  </IconButton>
                </Tooltip>
              </CardActions>
            </Card>
          ))
        }
      </Stack>

    </>
  );
};


export default Products;