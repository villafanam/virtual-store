import { useDispatch, useSelector } from "react-redux";
import { setCategory, reset } from "../../store/actions";
import { Button, ButtonGroup } from "@mui/material";



const Catergories = () => {
  const { categories  } = useSelector((state) => state.categories); 
  const dispatch = useDispatch();

  return (
    <>
      <h2>Browse our Categories</h2>

      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => {
                dispatch(setCategory(category));
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