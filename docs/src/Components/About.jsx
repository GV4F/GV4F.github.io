import "../Style/About.css";
import React from "react";
import { Carousel } from "react-bootstrap";

// ICONS BOOTSTRAP
import { BsTruck } from "react-icons/bs";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { BsCreditCard2Front } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="container computer">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center computer__col">
            <div className="icon__container"><BsTruck /></div>
            <div className="about__info">
              <p className="about__tittle">Envíos a Toda Guatemala</p>
              <p>Entrega de 1 a 4 Días</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center computer__col">
            <div className="icon__container"><IoShieldCheckmarkOutline /></div>
            <div className="about__info">
              <p className="about__tittle">Garantía de 3 Meses</p>
              <p>Productos 100% Originales</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-center computer__col">
            <div className="icon__container"><BsCreditCard2Front /></div>
            <div className="about__info">
              <p className="about__tittle">Pagos Seguros</p>
              <p>Paga con tarjeta o contra entrega</p>
            </div>
          </div>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="movil">

        <Carousel className="carousel__movil">
          <Carousel.Item interval={1000} className="carousel__movil-item">
            <div className="item__container-info">
              <div className="icon__container"><BsTruck /></div>
              <div className="about__info">
                <p className="about__tittle">Envíos a Toda Guatemala</p>
                <p>Entrega de 1 a 4 Días</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item interval={500} className="carousel__movil-item">
            <div className="item__container-info">
              <div className="icon__container"><IoShieldCheckmarkOutline /></div>
              <div className="about__info">
                <p className="about__tittle">Garantía de 3 Meses</p>
                <p>Productos 100% Originales</p>
              </div>
            </div>
          </Carousel.Item>
          
          <Carousel.Item className="carousel__movil-item">
            <div className="item__container-info">
              <div className="icon__container"><BsCreditCard2Front /></div>
              <div className="about__info">
                <p className="about__tittle">Pagos Seguros</p>
                <p>Paga con tarjeta o contra entrega</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

      </div>
    </>
  );
};