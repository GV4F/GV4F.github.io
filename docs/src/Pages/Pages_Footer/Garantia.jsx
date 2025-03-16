import React from "react";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import "./AddInfo.css";

export default function Garantia({ tittle }) {
  return (
    <>
      <div className="container__additionalInfo">
        <h3>{ tittle }</h3>
        <p>
          Todos los productos tienen garantía de <span>3 meses</span> por defectos de fábrica. <br />

          El cliente deberá de cubrir los gastos de envío para la revisión del defecto y 72 horas después de recibida la mercadería se dará dictamen de si aplica o no la garantía.<br />

          Ademas los productos en específico podrán tener periodos de garantía mayor al establecido.
        </p>
      </div>
      <About />
      <Footer />
    </>
  );
};