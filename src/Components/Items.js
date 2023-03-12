import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Items = ({ items, handleIsExist, handleDelete, handleAddCart }) => {
  return (
    <>
      {items.length ? (
        <div className="items">
          {items.map((item) => (
            <div className="item" key={item.id}>
              <p className="item-name">{item.title}</p>
              <img src={item.image} className="item-image" />
              <div className="item-details">
                <p className="item-price">{item.price} $</p>
                <input
                  type="checkbox"
                  onChange={() => handleIsExist(item.id)}
                  checked={item.isExist}
                />
                <FaTrashAlt
                  onClick={() => handleDelete(item.id)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Delete ${item.item}`}
                />
              </div>
              <button onClick={() => handleAddCart(item.id)}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>
          Your List Items is empty
        </p>
      )}
    </>
  );
};

export default Items;
