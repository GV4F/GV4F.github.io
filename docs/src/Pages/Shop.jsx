import React from 'react';
import "../Style/Shop.css";
import ProductsList from '../Components/ProductsList';
import Footer from '../Components/Footer';

export default function Shop({ addToCart }) {
  return (
    <>
      <ProductsList addToCart={addToCart} />
      <Footer />
    </>
  )
}
