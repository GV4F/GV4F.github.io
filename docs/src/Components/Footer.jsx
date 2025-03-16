import React from "react";
import Mail from "./Mail.jsx";
import { Link } from "react-router-dom";
import "../Style/Footer.css";

// ICONS REACTBOOTSTRAP
import { IoIosArrowForward } from "react-icons/io";
import { FaInstagram, FaXTwitter, FaFacebookMessenger, FaYoutube,FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";

export default function Footer() {
  function validateEmail() {
    const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    const input = document.getElementById("emailForm");
    const email = input.value;
    const isValid = expReg.test(email);

    if (isValid){
      input.value = "";
      return alert("Suscripción Realizada con exito");
    } 
    else return alert("Correo Invalido");
  }

  return (
    <footer>
      <div className="footer__divParent-1">

        <div className="divParent1__info">
          <p>INFORMACIÓN</p>
          <ul>
            <li> <Link to="/nosotros">Nosotros</Link></li>
            <li> <Link to="/envio">Envío y Entrega</Link></li>
            <li> <Link to="/privacidad">Política de Privacidad</Link></li>
            <li> <Link to="/servicio">Términos de Servicio</Link></li>
            <li> <Link to="/reembolso">Política de Reembolso</Link></li>
            <li> <Link to="/garantia">Garantía del Producto</Link></li>
          </ul>
        </div>

        <div className="divParent1__contact">
          <h3>Contactar con Nosotros</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cum voluptatum quae</p>

          <div className="divParent1__container-nets">
              <button className="divParent1__email"><a href=""><span><MdEmail /></span>Email<IoIosArrowForward /></a></button>
              
            <div className="nets__container-relative">
              <IoShareSocialOutline />
              <button className="footer__nets fn1"><a href="https://www.whatsapp.com/" target="_blank"><FaWhatsapp /></a></button>
              <button className="footer__nets fn2"><a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a></button>
              <button className="footer__nets fn3"><a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a></button>
              <button className="footer__nets fn4"><a href="https://www.twitter.com/" target="_blank"><FaXTwitter /></a></button>
              <button className="footer__nets fn5"><a href="https://www.messenger.com/" target="_blank"><FaFacebookMessenger /></a></button>
            </div>
          </div>
        </div>

        <div className="divParent1__suscribe">
          <p>Suscríbete a nuestra lista de correos y conoce lo último en tecnología y accesorios smart.</p>
          <form>
            <input type="text" name="email" id="emailForm" placeholder="Ingresa tu Email" className="text" autoComplete="off" required />
            <button type="button" className="submitbtn" onClick={()=>validateEmail()}><span>Suscríbete</span></button>
          </form>
        </div>

      </div>

      <div className="footer__divParent-2">
        <p className="copyright">© 2023 Techno Life. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};