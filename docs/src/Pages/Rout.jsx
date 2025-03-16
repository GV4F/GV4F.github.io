import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Nosotros from "./Pages_Footer/Nosotros";
import Envio from "./Pages_Footer/Envio";
import Privacidad from "./Pages_Footer/Privacidad";
import Servicio from "./Pages_Footer/Servicio";
import Reembolso from "./Pages_Footer/Reembolso";
import Garantia from "./Pages_Footer/Garantia";
import CartShop from "./CartShop";


export default function Rout({ addToCart, cartShop, setCartShop }) {
  return (
    <>
      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/shop" element={< Shop addToCart={addToCart}/>}></Route>
        <Route path="/cartShop" element={< CartShop cartShop={cartShop} setCartShop={setCartShop}/>}></Route>
        <Route path="/nosotros" element={< Nosotros tittle={"Sobre Nosotros"} />}></Route>
        <Route path="/envio" element={< Envio tittle={"Envío y Entrega"} />}></Route>
        <Route path="/privacidad" element={< Privacidad tittle={"Política de Privacidad"} />}></Route>
        <Route path="/servicio" element={< Servicio tittle={"Términos de Servicio"} />}></Route>
        <Route path="/reembolso" element={< Reembolso tittle={"Política de Reembolso"} />}></Route>
        <Route path="/garantia" element={< Garantia tittle={"Garantía del Producto"} />}></Route>
      </Routes>
    </>
  );
};