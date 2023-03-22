"use client";
import { createContext, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favouriteProducts, setFavouriteProducts] = useState([]);

  return (
    <FavoriteContext.Provider
      value={{
        favouriteProducts,
        setFavouriteProducts,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
