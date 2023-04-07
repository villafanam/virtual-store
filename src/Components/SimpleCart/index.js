import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CancelIcon from '@mui/icons-material/Cancel';
import { red } from '@mui/material/colors';
import { removeProduct } from "../../store/actions";


const SimpleCart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
      <List style={{
        position: 'fixed',
        top: '4.5rem',
        right: '1rem',
        width: '200px'
      }}>
        {
          cart.products.map((item, idx) => (
            <ListItem secondaryAction={
              <IconButton edge='end' aria-label="delete" onClick={() => dispatch(removeProduct(item))}>
                <CancelIcon sx={{ color: red[900] }} />
              </IconButton>}
            >
              <ListItemText primary={`${item.name} (${cart.qty[item.name]})`} ></ListItemText>
            </ListItem>
          ))
        }
      </List >
    </>
  );
};

export default SimpleCart;