import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Components/Nav';
import Rout from './Pages/Rout';

function App() {

  // CART SHOP
  const [cartShop, setCartShop] = useState([]);
  const addToCart = (product)=>{
    const exist = cartShop.find((x)=>{
      return x.id === product.id;
    });
    if (exist) {
      alert("Este producto ya está en el carrito");
    }else{
      setCartShop([...cartShop,{...product, qty:1}]);
      alert("Producto añadido al carrito");
    }
  }
  // console.log(cartShop);

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Rout addToCart={addToCart} cartShop={cartShop} setCartShop={setCartShop} />
      </BrowserRouter>
    </>
  );
}

export default App