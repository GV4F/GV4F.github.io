import React, { useState } from "react";
import "../Style/Trending.css";
import HomeProduct from "../JS/home_products";
import { Link } from "react-router-dom";
import ModalProducts from "./Modal";

// REACT ICONS
import { FaHeart } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";

// IMÁGENES IMPORTADAS
import rightOffert from "../Img/offert5.jpg";

export default function Trending() {
  const [trendingProduct, setTrendingProduct] = useState(HomeProduct);
  const filter = (x)=>{
    const filterProducts = HomeProduct.filter(e=>{
      if(x === "all") return trendingProduct;
      else return e.type === x;
    });
    setTrendingProduct(filterProducts);
  };

  const addToCart = (product) =>{
    alert("Add to Cart");
  }


  return (
    <div className="trending">
      <div className="container__trending">

        <div className="left__box">
          <div className="left__box-header">
            <div className="heading">
              <h2>Trending Product</h2>
            </div>
            <div className="cate">
              <button onClick={()=>filter("all")}>All</button>
              <button onClick={()=>filter("new")}>New</button>
              <button onClick={()=>filter("featured")}>Featured</button>
              <button onClick={()=>filter("top")}>Top Selling</button>
            </div>
          </div>

          <div className="products">
            <div className="container__products">
              {
                trendingProduct.map((e)=>
                {
                  return(
                    <>
                      <div className="box">
                        <div className="img__box">
                          <img src={e.img} alt={e.nombre} />
                          <div className="container__icon">
                            <ModalProducts tittle={e.nombre} img={e.img} cents={e.cents} price={e.precio} stock={e.stock} />
                            <span className="icon2">
                              <FaHeart />
                            </span>
                          </div>
                        </div>

                        <div className="box__info">
                          <h2>{e.nombre}</h2>
                          <p>Q.{e.precio}.<span className="cents">{e.cents}</span></p>
                          <button className="add" onClick={()=> addToCart (e)}>
                            <div><MdOutlineAddShoppingCart /></div> 
                          </button>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className="showMore__container">
            <Link to="/shop">
              <button>
                <div className="showMore__div">VIEW MORE</div>
              </button>
            </Link>
          </div>
        </div>

        <div className="right__box">
          <div className="right__container-img">
            <img src={rightOffert} alt="offerts" />

            <div className="right__container-info">
              <Link to="/shop">
                <button className="right__info-btn">
                  <span className="span1"></span>
                  Ofertas Navideñas
                  <span className="span2"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};