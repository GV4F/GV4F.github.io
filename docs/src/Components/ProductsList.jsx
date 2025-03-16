import React, { useState } from "react";
import "../Style/ProductsList.css";
import products_list from "../JS/products_list";
import PaginationVar from "./PaginationVar";
import ModalProducts from "./Modal";

// IMÁGENES IMPORTADAS
import banner from "../Img/banner2.png"

// REACT ICONS
import { FaHeart} from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineAddShoppingCart } from "react-icons/md";

export default function ProductsList({ addToCart }) {
  const [products, setProducts] = useState(products_list);
  const filterProducts = (x)=>{
    const filterX = products_list.filter(p=>{
      if (x === "all") return products_list;
      else return p.category === x;
    });
    setProducts(filterX);
  };
  const filterOffer = (x)=>{
    const filterO = products_list.filter(p=>{
      return p.offer === x;
    });
    setProducts(filterO);
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPorPage, setproductsPorPage] = useState(8);
  const max = Math.round(products_list.length / productsPorPage);

  const pOffer = (offer, precio, cents)=>{
    if (offer) {
      return(
        <div className="box__info-precio">
          <p className="p__offer-new">Q.{Math.floor(precio*0.7)}.{cents}</p>
          <p className="p__offer-old">Q.{precio}.{cents}</p>
        </div>
      );
    }else{
      return(
        <p>Q.{precio}.<span className="cents">{cents}</span></p>
      );
    }
  };

  const offerBanner = (offer)=>{
    if (offer) {
      return(
        <div className="container__offerBanner"><p>-30</p><BiSolidOffer /></div>
      );
    }
  }


  return (
    <>
      <div className="container__productsList">

        <div className="products__leftBox">
          <div className="leftBox__header"><h2>All Categories</h2></div>
          <div className="leftBox__categories-container">
            <button className="categories" onClick={()=>filterProducts("all")}># ALL</button>
            <button className="categories" onClick={()=>filterProducts("mouse")}># MOUSES</button>
            <button className="categories" onClick={()=>filterProducts("watches")}># WATCHES</button>
            <button className="categories" onClick={()=>filterProducts("pc")}># LAPTOP / PC</button>
            <button className="categories" onClick={()=>filterProducts("home")}># HOME APPLIANCES</button>
            <button className="categories" onClick={()=>filterProducts("headphones")}># HEADPHONES</button>
            <button className="categories" onClick={()=>filterProducts("phones")}># PHONES</button>
            <button className="categories" onClick={()=>filterProducts("speaker")}># SPEAKER</button>
            <button className="categories" onClick={()=>filterOffer(true)}># OFFER</button>
          </div>
        </div>

        <div className="products__rightBox">
          <div className="rightBox__banner">
            <img src={banner} alt="banner1" />
          </div>
          <div className="rightBox__container-shop">
            {
              products.slice((currentPage - 1) * productsPorPage, (currentPage - 1) * productsPorPage + productsPorPage).map((p)=>{
                return(
                  <React.Fragment key={p.id}>
                    <div className={`box ${p.offer ? "box__offer" : ""}`}>
                        <div className="img__box">
                          <img src={p.img} alt={p.nombre} />
                          {offerBanner(p.offer)}
                          <div className="container__icon">
                            <ModalProducts tittle={p.nombre} img={p.img} cents={p.cents} price={p.precio} stock={p.stock} offer={p.offer} />
                            <span className="icon2">
                              <FaHeart />
                            </span>
                          </div>
                        </div>

                        <div className="box__info">
                          <h2>{p.nombre}</h2>
                          {pOffer(p.offer, p.precio, p.cents)}
                          <button className="add" onClick={() => addToCart(p)}>
                            <div><MdOutlineAddShoppingCart /></div> 
                          </button>
                        </div>
                      </div>
                  </React.Fragment>
                );
              })
            }
          </div>
          <div className="pagination__container"><PaginationVar page={currentPage} setPage={setCurrentPage} max={max} /></div>
        </div>

      </div>
    </>
  );
};