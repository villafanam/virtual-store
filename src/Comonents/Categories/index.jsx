import { connect } from "react-redux";
import { setCategory, filterProduct, reset } from "../../store/categories";
import { Button, ButtonGroup } from "@mui/material";
import Products from "../Products";
import { When } from "react-if";



const Catergories = ({ categories, products, activeCategory, setCategory, filterProduct, reset }) => {
  return (
    <>
      <h2>Browse our Categories</h2>
      {/* <h2>{activeCategory.toUpperCase()}</h2> */}

      <ButtonGroup variant="text" aria-label="category button group">
        {
          categories.map((category, idx) => (
            <Button
              key={`category-${idx}`}
              onClick={() => {
                setCategory(category);
                filterProduct();
              }}
            >
              {category.displayName}
            </Button>

          ))
        }
        <Button color="error" onClick={() => reset()}>RESET</Button>
      </ButtonGroup>

      {/* <When condition={activeCategory !== ''}>
        <Products />
      </When> */}
    </>
  );
};

const mapStateToProps = ({ categories }) => {
  return {
    categories: categories.categories,
    products: categories.products,
    activeCategory: categories.activeCategory,
  };
};

const mapDispatchToProps = {
  setCategory,
  filterProduct,
  reset,
}

export default connect(mapStateToProps, mapDispatchToProps)(Catergories);