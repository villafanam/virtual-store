import { useDispatch, useSelector } from "react-redux";
// import { set } from "../../store/actions";
import { Button, ButtonGroup } from "@mui/material";
import { useEffect } from "react";
import { getCategoriesDB, set } from "../../store/categories/categories";
import { set as setPro } from "../../store/products/products";





const Catergories = () => {
  const { categories  } = useSelector((state) => state.categories); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesDB())
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
                dispatch(setPro(category));
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