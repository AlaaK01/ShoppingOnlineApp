import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Friend.css";

const Friend = ({ friends, registerFriend, handleDeleteFriend }) => {
  return (
    <div className="user-continer">
      {friends.length ? (
        <div className="users">
          {friends.map((friend) => (
            <div className="user" key={friend.id}>
              <div className="name-body">
                <p className="name-text">{friend.name}</p>
              </div>
              <div className="image-body">
                <img src={friend.urlImage} className="user-image" />
              </div>
              <div className="email-body">
                <p className="email-text">Email: {friend.email}</p>
              </div>
              <div className="city-body">
                <p className="city-text">City: {friend.address.city}</p>
              </div>
              <div className="phone-body">
                <p className="phone-text">Tel: {friend.phone}</p>
              </div>

              <div className="post-details">
                <button
                  className="update"
                  onClick={() => registerFriend(friend.id)}
                >
                  Edit
                </button>
                <FaTrashAlt
                  onClick={() => handleDeleteFriend(friend.id)}
                  role="button"
                  tabIndex="0"
                  aria-label={`Delete ${Friend.item}`}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ marginTop: "2rem", color: "red" }}>
          Your List Friends is empty
        </p>
      )}
    </div>
  );
};

export default Friend;
