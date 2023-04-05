import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  return (
    <nav>
      <h1>OUR STORE</h1>
      
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        Cart(0)
      </Button>
    </nav>
  );
};

export default Header;