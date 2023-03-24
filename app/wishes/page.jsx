import FavoriteProducts from "./Favourite";
export const metadata = {
  title:
    "Uzum - mahsulotlari kunning ertasiga yetkazib beriladigan ilk Oʻzbekiston savdo maydoni",
};

const page = () => {
  return (
    <section className="favorite mt-6">
      <div className="container">
        <ul className="favorite__list top-products__list">
          <FavoriteProducts />
        </ul>
      </div>
    </section>
  );
};

export default page;
