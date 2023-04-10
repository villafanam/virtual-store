import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { updateInventory } from "../../store/products/products";
import { addProduct } from "../../store/cart/cart";
import { Button, Card, CardActions, CardContent, CardMedia, Tooltip, Typography } from "@mui/material";

const ProductDetails = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  //console.log('id;-----', id);

  let item = products.find(item => item._id === id);

  const addItemHandler = (product) => {
    dispatch(addProduct(product));
    dispatch(updateInventory(product));
  };

  return (
    <>
      <Card sx={{ width: '60%', height: '450px' }}>
        <CardMedia
          component="img"
          image={`https://source.unsplash.com/random?${item.name}`}
          title={item.name}
          sx={{ height: '50%' }}
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
            <Button
            sx={{width: '100%'}}
              variant="contained"
              color="success"
              aria-label="add to shopping cart"
              startIcon={<AddShoppingCartIcon />}
              onClick={() => addItemHandler(item)}
            >
              BUY
            </Button>
          </Tooltip>

        </CardActions>
      </Card>
    </>
  );
};

export default ProductDetails;