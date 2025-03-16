import React from "react";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import "./AddInfo.css";

export default function Envio({ tittle }) {
  return (
    <>
      <div className="container__additionalInfo">
        <h3>{ tittle }</h3>
        <p>
        ¡En Smart Life, estamos orgullosos de ofrecer   envíos  a <span>Todo el País!</span> <br />

        Tenga en cuenta que requerimos de  <span>1</span>  a  <span>2</span>  días hábiles en promedio para enviar su pedido. 

        ¡Tenga la seguridad de que estamos haciendo todo lo que está a nuestro alcance para enviarle su pedido lo antes posible! 

        Una vez que se envía su pedido, dependiendo de su ubicación, el tiempo estimado de entrega es de  <span>2</span>  a  <span>5</span>  días o antes. Tenga en cuenta lo siguiente los días festivos pueden afectar los tiempos de entrega.
        </p>
      </div>
      <About />
      <Footer />
    </>
  );
};