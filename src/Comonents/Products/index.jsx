import { useDispatch, useSelector } from "react-redux";
import { Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct } from "../../store/actions";
import { useEffect } from "react";
import { getProducts } from "../../store/products/products";


const Products = () => {
  const { products, categories } = useSelector((state) => state);
  const { activeCategory } = categories;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  console.log(products);
  return (
    <>
      {activeCategory && <h1>{activeCategory.displayName}</h1>}
      {activeCategory && <p>Category description goes here! </p>}

      <Grid container spacing={4}>
        {
          activeCategory && products.map((item, idx) => (
            <Grid item key={`product-${idx}`} xs={12} sm={6} md={4}>
              <Card sx={{ width: '60%', height: '450px' }}>
                <CardMedia
                  component="img"
                  image={`https://source.unsplash.com/random?${item.name}`}
                  title={item.name}
                  sx={{height: '50%'}}
                >
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
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

            </Grid>
          ))
        }

      </Grid>


    </>
  );
};


export default Products;