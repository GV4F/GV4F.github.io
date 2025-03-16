import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FaEye } from "react-icons/fa";
import Quantity from "./Quantity";
import "../Style/Modal.css";

export default function ModalProducts({ tittle, img, price, stock, cents, offer }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const pStock = (stock)=>{
    if(stock === "Disponible"){
      return(
        <p className="modal__info-stock--green">{ stock }</p>
      );
    }else{
      return(
        <p className="modal__info-stock--red">{ stock }</p>
      );
    }
  }

  const pOffer = (offer, precio, cents)=>{
    if (offer) {
      return(
        <div className="modal__info-precio">
          <p className="modal__offer-old">Q.{precio}.{cents}</p>
          <p className="modal__offer-new">Q.{Math.floor(precio*0.7)}.{cents}</p>
        </div>
      );
    }else{
      return(
        <p className="modal__info-precio">Q.{precio}.<span className="cents">{cents}</span></p>
      );
    }
  };

  return (
    <>
      <span className="icon1" onClick={handleShow}>
        <FaEye />
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ tittle }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal__img">
            <img src={ img } alt={ tittle } />
          </div>
          <div className="modal__info">
            {pOffer(offer, price, cents)}
            {pStock(stock)}
            <Quantity />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="add">Añadir al Carrito</button>
          <Link to="/shopNow"><button className="shopNow">Comprar Ahora</button></Link>
        </Modal.Footer>
      </Modal>
    </>
  );
};