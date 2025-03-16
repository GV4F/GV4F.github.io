import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import "../Style/CartShop.css";

export default function CartShop({ cartShop, setCartShop }) {

  const offer = (offer, price, nombre)=>{
    const [sum, setSum] = useState(1);
    const addSpan = ()=> setSum(sum+1);
    const resSpan = ()=>{
      if (sum > 1) {
        setSum(sum-1);
      }
    }

    if (offer) {
      price = Math.floor(price*0.7);
      return (
        <>
          <div className="cartShop__container-info">
            <h3>{nombre}</h3>
            <p>Precio: Q.{price}</p>
            <p>Total: Q.{(price*sum)}</p>
          </div>
          <div className="cartShop__container-quality">
            <div className="cartShop__cantidad">
              <button id="sum" onClick={()=>addSpan()}>+</button>
              <span id="cantidad">{sum}</span>
              <button id="res" onClick={()=>resSpan()}>-</button>
            </div>
          </div>
        </>
      );
    }else{
      return (
        <>
          <div className="cartShop__container-info">
            <h3>{nombre}</h3>
            <p>Precio: Q.{price}</p>
            <p>Total: Q.{(price*sum)}</p>
          </div>
          <div className="cartShop__container-quality">
            <div className="cartShop__cantidad">
              <button id="sum" onClick={()=>addSpan()}>+</button>
              <span id="cantidad">{sum}</span>
              <button id="res" onClick={()=>resSpan()}>-</button>
            </div>
          </div>
        </>
      );
    }
  }
  

  const cart = () =>{
    if (cartShop.length === 0) {
      return(
        <>
          <div className="cartShop__empty">
            <p>Tu carrito de Compras está Vacío</p>
            <Link to="/Shop">
              <button>
                <div className="cSD">Comprar Ahora</div>
              </button>
            </Link>
          </div>
        </>
      );
    }
    else{
      const cartItems = cartShop.map((p)=>{
        return(
          <React.Fragment key={p.id}>
            <div className="box__cartShop">
              <div className="box__cartShop-trash">
                <FaTrash />
              </div>
              <div className="cartShop__container-img">
                <img src={p.img} alt={p.nombre} />
              </div>

              <div className="cartShop__container-mid">
                {offer(p.offer, p.precio, p.nombre)}
              </div>
            </div>
          </React.Fragment>
        );
      });
      return cartItems;
    }
  }

  return (
    <div className="cartShop">
      <h3 className="cartShop__h3">CART SHOP</h3>
      <div className="container__cart">{cart()}</div>
      <div className="container__total"></div>
    </div>
  )
}