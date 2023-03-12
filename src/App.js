import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Components/Main";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useState, useEffect } from "react";
import About from "./Components/About";
import Friends from "./Components/Friends";
import ShoppingCart from "./Components/ShoppingCart";

import { withAuthenticator, Button, Heading } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  const [fontColor, setFontColor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemToAdd) => {
    if (cartItems.find((item) => item.id === itemToAdd.id)) return;
    const lisCartItems = [...cartItems, itemToAdd];
    setCartItems(lisCartItems);
  };

  const handleCartDelete = (id) => {
    const listItems = cartItems.filter((item) => item.id !== id);
    setCartItems(listItems);
  };

  const handleCartIsExist = (id) => {
    const listItems = cartItems.map((item) =>
      item.id === id ? { ...item, isExist: !item.isExist } : item
    );
    setCartItems(listItems);
  };

  return (
    <Router>
      <Header fontColor={fontColor} backgroundColor={backgroundColor} />

      <Routes>
        <Route
          path="/"
          element={
            <Main backgroundColor={backgroundColor} addToCart={addToCart} />
          }
        />

        <Route
          path="/shopping_cart"
          element={
            <ShoppingCart
              cartItems={cartItems}
              backgroundColor={backgroundColor}
              handleCartDelete={handleCartDelete}
            />
          }
        />

        <Route
          path="/friends"
          element={<Friends backgroundColor={backgroundColor} />}
        />
        <Route path="/about_us" element={<About />} />
      </Routes>

      <Footer
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        setFontColor={setFontColor}
        setBackgroundColor={setBackgroundColor}
      />
    </Router>
  );
}

//export default App;
export default withAuthenticator(App);
