import React, { useContext } from "react";
import Star from "../../public/icons/Star";
import { Link } from "react-router-dom";
import Heart from "../../public/icons/Heart";
import { CartContext } from "../context/CartContext";
import { SavedContext } from "../context/SavedContext";
import { message } from "antd";

function ProductCard({ product }) {
  const { id, name, images, price_per_month,  discount_price } =
    product;
  const { addCart } = useContext(CartContext);
  const { addSaved, isSaved } = useContext(SavedContext);
  function handleClick() {
    addCart(product);
    message.success('Mahsulot savatga muvaffaqiyatli qo`shildi!')
  }
  function addItemSaved() {
    addSaved(product);
    message.success('Mahsulot sevimlilarga muvaffaqiyatli qo`shildi!')
  }
  return (
    <div className="container">
      <div className="card">
        <Link to={"/product/" + id}>
          <div className="card-image">
            <img src={images[0]} alt={name} />
          </div>
        </Link>
        <div className="card-content">
          <Link to={"/product/" + id}>
            {" "}
            <p>{name}</p>
          </Link>
          <p>
            {" "}
            <span>
              {/* <Star /> ( {reviews} sharhlar) */}
            </span>
          </p>
          <p className="price">{price_per_month.toLocaleString()} so'm/ 24 oy</p>
          <h2>{discount_price.toLocaleString()} so'm</h2>
        </div>
        <div className="card-buttons">
          <button onClick={addItemSaved}>
            <Heart isFilled={isSaved(id)} />
          </button>

          <button onClick={handleClick} className="cart-saved">
            <img src="https://texnomart.uz/_nuxt/img/header-basket.04697d5.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
