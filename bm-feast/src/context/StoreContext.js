import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const nextQty = (prev[itemId] || 0) - 1;
      if (nextQty <= 0) {
        const { [itemId]: _omit, ...rest } = prev; 
        return rest;
      }
      return { ...prev, [itemId]: nextQty };
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const id in cartItems) {
      const qty = cartItems[id];
      if (qty > 0) {
        const item = food_list.find((p) => p._id === id);
        if (item) total += item.price * qty;
      }
    }
    return total;
  };

  const clearCart = () => setCartItems({});

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    searchTerm,
    setSearchTerm,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;


