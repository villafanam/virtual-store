

import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails  from './Components/ProductDetails'
import Storefront from './Components/Storefront';
import ShoppingCart from './Components/ShoppingCart'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Storefront />} />
          <Route path='/productdetails/:id' element={<ProductDetails />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Header />
      <Storefront />
      <Footer /> */}
    </>
  );
}

export default App;
