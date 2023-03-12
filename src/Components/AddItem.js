import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({
  newName,
  setNewName,
  newDescribtion,
  setNewDescribtion,
  newUrlImage,
  setNewUrlImage,
  handleSubmit,
  newPrice,
  setNewPrice,
  newIsExist,
  setNewIsExist,
  newCategory,
  setNewCategry,
}) => {
  const inputRef = useRef();

  return (
    <form onSubmit={handleSubmit}>
      <p className="add-item-title">To Add A New Item...</p>
      <div className="addForm">
        <label htmlFor="addName">Add Name</label>

        <input
          autoFocus
          ref={inputRef}
          id="addName"
          type="text"
          placeholder="Add Name"
          required
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addDescribtion">Add Describtion</label>

        <input
          autoFocus
          ref={inputRef}
          id="addDescribtion"
          type="text"
          placeholder="Add Describtion"
          required
          value={newDescribtion}
          onChange={(e) => setNewDescribtion(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addUrlImage">Add Url Image</label>

        <input
          autoFocus
          ref={inputRef}
          id="addUrlImage"
          type="text"
          placeholder="Add Url Image"
          required
          value={newUrlImage}
          onChange={(e) => setNewUrlImage(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addPrice">Add Product Price</label>
        <input
          autoFocus
          ref={inputRef}
          id="addPrice"
          type="number"
          placeholder="Add Price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addIsExist">Add Is Exist</label>
        <input
          autoFocus
          ref={inputRef}
          id="addIsExist"
          type="checkbox"
          placeholder="Is Exist"
          checked={newIsExist}
          onChange={(e) => setNewIsExist(e.target.checked)}
        />
      </div>
      <div className="addForm">
        <label htmlFor="addCategory">Add Category</label>
        <input
          autoFocus
          ref={inputRef}
          id="addCategory"
          type="text"
          placeholder="Add Item Category"
          value={newCategory}
          onChange={(e) => setNewCategry(e.target.value)}
        />
      </div>
      <button
        className="to-add-item"
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
