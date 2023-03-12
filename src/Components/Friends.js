import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";
import ApiPostRequast from "./ApiPostRequast";
import SearchItems from "./SearchItems";
import Friend from "./Friend";
import RegisterFriend from "./RegisterFriend";
import { API } from "aws-amplify";

const Friends = ({ backgroundColor }) => {
  const [friends, setFriends] = useState([]);
  const API_URL =
    "https://4y72giziij.execute-api.eu-north-1.amazonaws.com/products/users";

  const [search, setSearch] = useState("");
  const [newName, setNewName] = useState("");
  const [newUserName, setNewUserName] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUrlImage, setNewUrlImage] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newZipcode, setNewZipcode] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const callFriends = async () => {
  //   try {
  //     const friendsData = await API.get("itemsApi", "/users");
  //     setFriends(friendsData.users);
  //     console.log("friendsData: ", friendsData);
  //   } catch (err) {
  //     console.log({ err });
  //   }
  // };

  // useEffect(() => {
  //   callFriends();
  // }, []);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await await API.get("itemsApi", "/users");
        //if (!response.ok) throw Error("Did not receive expected data");
        setFriends(response.users);

        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchFriends())();
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const fetchFriends = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw Error("Did not receive expected data");
  //       const friendsList = await response.json();
  //       setFriends(friendsList);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   setTimeout(() => {
  //     (async () => await fetchFriends())();
  //   }, 2000);
  // }, []);

  const registerFriend = async (
    newName,
    newUserName,
    newPassword,
    newGender,
    newEmail,

    newCity,
    newStreet,
    newZipcode,
    newPhone,
    newUrlImage
  ) => {
    const Id = friends.length ? friends[friends.length - 1].id + 1 : 1;
    const newFriend = {
      id: Id,
      name: newName,
      username: newUserName,
      password: newPassword,
      email: newEmail,
      gender: newGender,
      address: {
        city: newCity,
        street: newStreet,
        zipcode: newZipcode,
      },

      phone: newPhone,
      urlImage: newUrlImage,
    };
    const friendsList = [...friends, newFriend];
    setFriends(friendsList);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newFriend),
    };
    const result = await ApiPostRequast(API_URL, postOptions);
    if (result) setFetchError(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerFriend(
      newName,
      newUserName,
      newPassword,
      newGender,
      newEmail,

      newCity,
      newStreet,
      newZipcode,
      newPhone,
      newUrlImage
    );
  };

  const handleDeleteFriend = async (id) => {
    const usersList = friends.filter((user) => user.id !== id);
    setFriends(usersList);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiPostRequast(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  };

  const filterList = friends.filter((friend) =>
    friend.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
      <p className="main-title">Our Friends </p>
      <p className="main-title-number" style={{ color: backgroundColor }}>
        {filterList.length}
      </p>
      <SearchItems search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading friends...</p>}
        {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Friend
            friends={filterList}
            //friends={friends}
            registerFriend={registerFriend}
            handleDeleteFriend={handleDeleteFriend}
          />
        )}
      </main>

      <RegisterFriend
        newName={newName}
        setNewName={setNewName}
        newUserName={newUserName}
        setNewUserName={setNewUserName}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        newEmail={newEmail}
        setNewEmail={setNewEmail}
        newGender={newGender}
        setNewGender={setNewGender}
        newUrlImage={newUrlImage}
        setNewUrlImage={setNewUrlImage}
        newCity={newCity}
        setNewCity={setNewCity}
        newStreet={newStreet}
        setNewStreet={setNewStreet}
        newZipcode={newZipcode}
        setNewZipcode={setNewZipcode}
        newPhone={newPhone}
        setNewPhone={setNewPhone}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Friends;
