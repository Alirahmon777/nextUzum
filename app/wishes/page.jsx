import FavoriteProducts from "./Favourite";
export const metadata = {
  title:
    "Uzum - mahsulotlari kunning ertasiga yetkazib beriladigan ilk Oʻzbekiston savdo maydoni",
  description:
    "Katta miqdorda chegirmali mahsulotlar: elektronika, maishiy texnika, bolalar tovarlari, kiyim-kechak va poyabzal, uy, sport, goʻzallik va sogʻliq uchun hamma mahsulotlar, kitoblar, uy hayvonlari uchun tovarlar va boshqalar. 12 oylik muddatli toʻlov. 1 kunda yetkazib berish. Uzum Marketda har kuni chegirmalar va aktsiyalar!",
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
