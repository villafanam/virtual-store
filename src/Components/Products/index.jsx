import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addProduct, getProducts, updateInventory } from "../../store/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Products = () => {
  const { products, categories } = useSelector((state) => state);
  const { activeCategory } = categories;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

const addItemHandler = (product) => {
  dispatch(addProduct(product));
  dispatch(updateInventory(product));
};

  //console.log(products);
  return (
    <>
      {activeCategory && <h1>{activeCategory.name}</h1>}
      {activeCategory && <p>{activeCategory.description}</p>}

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
                      onClick={() => addItemHandler(item)}
                    >
                      <AddShoppingCartIcon />
                    </IconButton>
                  </Tooltip>
                  <Button component={Link} to={`/productdetails/${item._id}`} >view details</Button>
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