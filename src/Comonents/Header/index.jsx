import { Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector(state => state);
  return (
    <Grid container p={2}>
      <Grid item xs>
        <Typography variant="h4">OUR STORE</Typography>
      </Grid>
      
      <Grid item xs sx={{ textAlign: 'right', alignSelf: 'center' }}>
        <Button variant="text" startIcon={<ShoppingCartIcon />}>
          Cart({cart.length})
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;