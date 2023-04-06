import { useDispatch, useSelector } from "react-redux";
import { set, getCategories, reset } from "../../store/actions";
import { Button, ButtonGroup } from "@mui/material";
import { useEffect } from "react";




const Catergories = () => {
  const { categories  } = useSelector((state) => state.categories); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, []);

  return (
    <>
      <h2>Browse our Categories</h2>

      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => {
                dispatch(set(category));
              }}
            >
              {category.name}
            </Button>

          ))
        }
        {/* <Button color="error" onClick={() => dispatch(reset())}>RESET</Button> */}
      </ButtonGroup>

    </>
  );
};


export default Catergories;