import React from "react";
import { useState, useEffect } from "react";
import Items from "./Items";
import "./Main.css";
import SearchItems from "./SearchItems";
import AddItem from "./AddItem";
import apiRequest from "./apiRequest";
import Aside from "./Aside";
import { API } from "aws-amplify";

const Main = ({ backgroundColor, addToCart }) => {
  const API_URL = "https://fakestoreapi.com/products";
  // const API_URL = "../../data/db.json";

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newDescribtion, setNewDescribtion] = useState("");
  const [newUrlImage, setNewUrlImage] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newIsExist, setNewIsExist] = useState();
  const [newCategory, setNewCategry] = useState("");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const callProducts = async () => {
  //   try {
  //     const productsData = await API.get("itemsApi", "/products");
  //     setItems(productsData.products);
  //     setFetchError(null);
  //     console.log("productsData: ", productsData);
  //   } catch (err) {
  //     console.log({ err });
  //   }
  // };

  // useEffect(() => {
  //   callProducts();
  // }, []);

  useEffect(() => {
    const callProducts = async () => {
      try {
        const response = await API.get("itemsApi", "/products");

        setItems(response.products);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await callProducts())();
    }, 1000);
  }, []);

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw Error("Did not receive expected data");
  //       const listItems = await response.json();
  //       setItems(listItems);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   setTimeout(() => {
  //     (async () => await fetchItems())();
  //   }, 1000);
  // }, []);

  const addItem = async (
    newName,
    newDescribtion,
    newUrlImage,
    newPrice,
    newIsExist,
    newCategory
  ) => {
    const Id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = {
      id: Id,
      name: newName,
      description: newDescribtion,
      imageUrl: newUrlImage,
      price: newPrice,
      isExist: newIsExist,
      category: newCategory,
    };
    const listItems = [...items, newItem];
    setItems(listItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleIsExist = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, isExist: !item.isExist } : item
    );
    setItems(listItems);

    const findItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isExist: findItem[0].isExist }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newName) return;
    addItem(
      newName,
      newDescribtion,
      newUrlImage,
      newPrice,
      newIsExist,
      newCategory
    );
  };

  const filterList = items.filter((item) =>
    item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const handleAddCart = (_id) => {
    //if (cartItems.find((item) => item.id === _id)) return;
    const findItem = items.find((item) => item.id === _id);
    //const listItems = [...cartItems, findItem];
    addToCart(findItem);
  };

  return (
    <div>
      <Aside />
      <p className="main-title">All Items List</p>
      <p className="main-title-number" style={{ color: backgroundColor }}>
        {filterList.length}
      </p>
      <SearchItems search={search} setSearch={setSearch} />

      {/* <Items
        //items={items}
        items={filterList}
        handleIsExist={handleIsExist}
        handleDelete={handleDelete}
        handleAddCart={handleAddCart}
      /> */}

      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Items
            items={items}
            //items={filterList}
            handleIsExist={handleIsExist}
            handleDelete={handleDelete}
            handleAddCart={handleAddCart}
          />
        )}
      </main>

      <AddItem
        newName={newName}
        setNewName={setNewName}
        newDescribtion={newDescribtion}
        setNewDescribtion={setNewDescribtion}
        newUrlImage={newUrlImage}
        setNewUrlImage={setNewUrlImage}
        newPrice={newPrice}
        setNewPrice={setNewPrice}
        newIsExist={newIsExist}
        setNewIsExist={setNewIsExist}
        newCategory={newCategory}
        setNewCategry={setNewCategry}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Main;
