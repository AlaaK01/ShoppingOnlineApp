import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./ShoppingCart.css";

const ShoppingCart = ({
  cartItems,
  backgroundColor,
  handleCartDelete,
  handleCartIsExist,
}) => {
  return (
    <div className="shopping-cart">
      <p className="cart-title">Cart Items</p>
      <p className="cart-title-number" style={{ color: backgroundColor }}>
        {cartItems.length}
      </p>
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <p className="cart-item-name">{item.title}</p>
              <img src={item.image} className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-price">{item.price} $</p>

                <FaTrashAlt
                  onClick={() => handleCartDelete(item.id)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Delete ${item.item}`}
                />
              </div>
              <div className="item-line"></div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>
          Your List Items is empty
        </p>
      )}
    </div>

    // <cart>
    //   {cartItems.length ? (
    //     <div className="items">
    //       {cartItems.map((item) => (
    //         <div className="item">
    //           <p className="item-name">{item.name}</p>
    //           <img src={item.imageUrl} className="item-image" />
    //           <div className="item-details">
    //             <p className="item-price">{item.price} $</p>

    //             <FaTrashAlt
    //               onClick={() => handleDelete(item.id)}
    //               role="button"
    //               tabIndex="0"
    //               aria-label={`Delete ${item.item}`}
    //             />
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   ) : (
    //     <p style={{ marginTop: "2rem", color: "red" }}>
    //       Your Shopping Cart is empty
    //     </p>
    //   )}
    // </cart>
  );
};

export default ShoppingCart;
