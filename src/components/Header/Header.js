import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import { modalsActions } from "../../actions/modals";
import { cartProductsSelectors } from "../../selectors/cartProducts";
import { productsSelectors } from "../../selectors/products";

import logo from "../../assets/logo.png";

export default function Header() {
  const cartProductsCounter = useSelector(cartProductsSelectors.getCartCounter);
  const showAddCartAlert = useSelector(productsSelectors.showAddCartAlert);

  const dispatch = useDispatch();

  return (
    <div data-testid="header" className="header">
      <div className="header__content">
        <>
          <Link className="link link--home" to="/">
            <img src={logo} alt="Logo" />
            Fashionista

          </Link>
          <div className="header__icons">
            <FaSearch
              className="icon icon--search"
              onClick={() => dispatch(modalsActions.handleShowSearch())}
            />
            <FaShoppingCart
              className="icon icon--cart"
              onClick={() => dispatch(modalsActions.handleShowCart())}
            />
            <div
              onClick={() => dispatch(modalsActions.handleShowCart())}
              className={
                showAddCartAlert
                  ? "cart-counter cart-counter--active"
                  : "cart-counter"
              }
              style={{ display: cartProductsCounter === 0 && "none" }}
            >
              <span>{cartProductsCounter}</span>
            </div>
          </div>
        </>
      </div>
    </div>
  );
}
