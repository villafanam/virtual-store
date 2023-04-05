import { Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

const Header = () => {
  const { cart } = useSelector(state => state);
  return (
    <nav>
      <h1>OUR STORE</h1>
      
      <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
        Cart({cart.length})
      </Button>
    </nav>
  );
};

export default Header;