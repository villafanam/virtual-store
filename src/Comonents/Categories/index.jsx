import { useDispatch, useSelector } from "react-redux";
import { setCategory, filterProduct, reset } from "../../store/actions";
import { Button, ButtonGroup } from "@mui/material";



const Catergories = () => {
  const { categories  } = useSelector((state) => state); 
  const dispatch = useDispatch();

  return (
    <>
      <h2>Browse our Categories</h2>

      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => {
                dispatch(setCategory(category));
                dispatch(filterProduct());
              }}
            >
              {category.displayName}
            </Button>

          ))
        }
        <Button color="error" onClick={() => dispatch(reset())}>RESET</Button>
      </ButtonGroup>

    </>
  );
};


export default Catergories;