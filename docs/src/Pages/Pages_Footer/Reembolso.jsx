import React from "react";
import Footer from "../../Components/Footer";
import About from "../../Components/About";
import "./AddInfo.css";

export default function Reembolso({ tittle }) {
  return (
    <>
      <div className="container__additionalInfo">
        <h3>{ tittle }</h3>
        <p>
          <span>DEVOLUCIONES</span> <br />
          Nuestra política tiene una duración de 30 días. Si 30 días han pasado desde Tu compra, por desgracia no podemos ofrecer un reembolso o cambio.<br />

          Para ser elegible para una devolución, el artículo debe estar sin usar y en las mismas condiciones en que lo recibiste. También debe estar en su embalaje original.<br />

          Existen varios tipos de bienes que están exentos de ser devueltos. Productos perecederos tales como alimentos, flores, periódicos o revistas no pueden ser devueltos. Tampoco aceptamos productos que son bienes íntimos o sanitarios, materiales peligrosos, o líquidos o gases inflamables.<br />


          <span>Productos no retornables adicionales:</span><br />
          * Tarjetas de regalo<br />
          * Productos de software descargables<br />
          * Algunos productos de salud y cuidado personal<br />

          Para completar tu devolución, requerimos un recibo o prueba de compra.<br />

          Por favor no envíes tu compra de retorno al fabricante.<br />

          <span>Hay algunas situaciones donde solo se pueden garantizar reembolsos parciales: (de ser aplicable)</span><br />
          * Libros con obvios signos de uso<br />
          * CD, DVD, cintas VHS, software, juegos de video, cassettes, o discos de vinilo que hayan sido abiertos.<br />
          * Cualquier ítem que no se encuentre en su condición original, que esté dañado o le falten partes por razones ajenas a nosotros.<br />
          <span>* Cualquier ítem que sea devuelto más de 30 días después del envío.</span><br />

          <span>Reembolsos (donde aplique)</span><br />
          Una vez que tu devolución es recibida e inspeccionada, envíaremos un correo electrónico para notificarte que hemos recibido tu devolución. Tambien te notificaremos la aprobación o rechazo de tu reembolso.
          Si eres aprobado, entonces tu reembolso será procesado y un crédito será automáticamente aplicado a tu tarjeta de crédito o método original de pago, en una cierta cantidad de días.


          <span>Reembolsos tardíos o perdidos (donde aplique)</span><br />
          Si aún no has recibido tu reembolso, por favor chequea tu cuenta bancaria otra vez.
          Luego contacta a tu compañía de tarjeta de crédito, puede tomar algún tiempo antes de que tu reembolso se postee oficialmente.
          Próximo paso, contacta a tu banco. A menudo pasa cierto tiempo antes de que tu reembolso se postee.<br />
          Si has seguido todos estos pasos y aún no haz recibido el reembolso, por favor contáctanos a contacto@smartlife.com.gt<br />

          <span>Artículos en oferta (donde aplique)</span><br />
          Solo los artículos a precio regular serán reembolsados, desafortunadamente los productos en oferta no pueden ser refundados.<br />

          <span>Intercambios (donde aplique)</span><br />
          Solo reemplazamos artículos que estén defectuosos o dañados. Si necesitas cambiarlo por el mismo artículo, envíanos un correo electrónico a contacto@smartlife.com.gt y envía el artículo a: Vía 3 1-00 Edificio 3 Tec 4 Grados Norte Ofic. 710 zona 4, Guatemala, C.A., Guatemala, GU, 01001, Guatemala.<br />

          <span>Regalos</span><br />
          Si el artículo fue marcado como regalo cuando fue comprado y enviado directamente a ti, recibirás un crédito de regalos por el valor de la devolución. Una vez que recibimos el artículo, un certificado de regalo te será enviado por correo postal.<br />

          Si el artículo no fue marcado como regalo cuando fue comprado, o el regalo fue enviado al comprador para entregártelo más tarde, le enviaremos un reembolso al comprador y el sabrá de tu devolución.<br />


          <span>Envío</span><br />
          Para devolver tu producto, debes enviarlos a: Vía 3 1-00 Edificio 3 Tec 4 Grados Norte Ofic. 710 zona 4, Guatemala, C.A., Guatemala, GU, 01001, Guatemala.<br />

          Serás responsable por el pagos de los costos de envío para el retorno del artículo. Los costos de envío no son reembolsables. Si recibes un reembolso, el costo del envío de la devolución será deducido de tu reembolso.<br />

          Dependiendo de dónde vivas, el tiempo que tome recibir el producto intercambiado, puede variar.<br />

          Si estás enviando un producto de valor mayor a $75, deberías considerar usar un servicio de envío rastreable o comprar seguro para el envío. Nosotros no garantizamos que recibiremos tu devolución.
        </p>
      </div>
      <About />
      <Footer />
    </>
  );
};