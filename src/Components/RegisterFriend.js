import React from "react";
import { useRef } from "react";

const RegisterFriend = ({
  newName,
  setNewName,
  newUserName,
  setNewUserName,
  newPassword,
  setNewPassword,
  newEmail,
  setNewEmail,
  newGender,
  setNewGender,
  newUrlImage,
  setNewUrlImage,

  newCity,
  setNewCity,
  newStreet,
  setNewStreet,
  newZipcode,
  setNewZipcode,
  newPhone,
  setNewPhone,
  handleSubmit,
}) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit}>
      <p className="add-post-title">To Add A New Friend...</p>
      <div className="addForm">
        <label htmlFor="addNewName">Add New Name</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addName"
          type="text"
          placeholder="Add New Name"
          required
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addUserName">Add User Name</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addUserName"
          type="text"
          placeholder="Add User Name"
          required
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addPassword">Add Password</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addPassword"
          type="text"
          placeholder="Add Password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addEmail">Add Email</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addEmail"
          type="text"
          placeholder="Add Email"
          required
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addGender">Add Gender</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addGender"
          type="text"
          placeholder="Add Gender"
          required
          value={newGender}
          onChange={(e) => setNewGender(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addUrlImage">Add Image</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addImage"
          type="text"
          placeholder="Add Url Image"
          value={newUrlImage}
          onChange={(e) => setNewUrlImage(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addCity">Add City</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addCity"
          type="text"
          placeholder="Add City"
          value={newCity}
          onChange={(e) => setNewCity(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addStreet">Add Street</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addStreet"
          type="text"
          placeholder="Add Street"
          value={newStreet}
          onChange={(e) => setNewStreet(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addZipcode">Add zipcode</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addZipcode"
          type="text"
          placeholder="Add Zipcode"
          value={newZipcode}
          onChange={(e) => setNewZipcode(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addPhone">Add Phone</label>

        <input
          autoFocus
          //   ref={inputRef}
          id="addPhone"
          type="text"
          placeholder="Add Phone"
          value={newPhone}
          onChange={(e) => setNewPhone(e.target.value)}
        />
      </div>

      <button
        className="add-to-post"
        type="submit"
        aria-label="Add Post"
        onClick={() => inputRef.current.focus()}
      >
        Regiser Friend
      </button>
    </form>
  );
};

export default RegisterFriend;
