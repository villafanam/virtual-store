import { Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { cart } = useSelector(state => state);
  return (
    <Grid container p={2}>
      <Grid item xs>
        {/* <Typography variant="h4">OUR STORE</Typography> */}
        <Button component={Link} to='/'>OUR STORE</Button>
      </Grid>
      
      <Grid item xs sx={{ textAlign: 'right', alignSelf: 'center' }}>
        <Button 
        variant="text" 
        // startIcon={<ShoppingCartIcon />}
        component={Link}
        to='/shoppingcart'
        >
          Cart({cart.length})
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;