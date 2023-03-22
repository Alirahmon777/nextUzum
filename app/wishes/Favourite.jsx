"use client";

import { useContext, useEffect } from "react";
import Card from "../ui/Card";
import { FavoriteContext } from "../contexts/isFavorite";
import { ToastContainer } from "react-toastify";
import { toastError, toastSuccess } from "../utils/toaster";

function FavoriteProducts() {
  const { favouriteProducts, setFavouriteProducts } =
    useContext(FavoriteContext);

  useEffect(() => {
    fetching();
  }, []);

  async function fetching() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}fakeapi`, {
        cache: "no-store",
      });
      const data = await res.json();
      const result = data.filter((product) => {
        if (product.isFavorite) {
          return product;
        }
      });
      setFavouriteProducts(result);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleFavoriteClick(id) {
    favouriteProducts.filter(async (product) => {
      if (product.id == id) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}fakeapi/${id}`,
            {
              method: "put",
              body: JSON.stringify({
                ...product,
                isFavorite: !product.isFavorite,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          const data = await res.json();
          fetching();
        } catch (error) {
          console.log(error);
        } finally {
          if (product.isFavorite) {
            toastSuccess(`${product.name} sevimlilardan chiqarildi`);
          }
        }
      }
    });
  }

  return (
    <>
      {favouriteProducts.length == 0 && (
        <h2 style={{ color: "red" }} className="text-[20px]">
          No Favorite Products.
        </h2>
      )}
      {favouriteProducts.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          image={product.image}
          price={product.price}
          rating={product.rating}
          isFav={product.isFavorite}
          id={product.id}
          handleFavoriteClick={handleFavoriteClick}
        />
      ))}
      <ToastContainer />
    </>
  );
}

export default FavoriteProducts;
