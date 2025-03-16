import React from "react";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import "./AddInfo.css";

export default function Nosotros({ tittle }) {
  return (
    <>
      <div className="container__additionalInfo">
        <h3>{ tittle }</h3>
        <p>
         Somos un equipo de personas que brindamos a nuestros clientes amigos, productos que aportan soluciones Smart (inteligentes) a nuestro diario vivir haciendo una  vida más sencilla, práctica o eficiente.
        </p>
      </div>
      <About />
      <Footer />
    </>
  );
};
