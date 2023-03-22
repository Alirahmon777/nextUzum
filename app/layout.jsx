import { Roboto } from "next/font/google";
import Header from "./ui/Header";
import "../styles/globals.scss";
import "./header.scss";
import "./card.scss";
import FavoriteContextProvider from "./contexts/isFavorite";
import SetDataContextProvider from "./contexts/setDatas";
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Uzum Market — internet-doʻkon",
  description:
    "Katta miqdorda chegirmali mahsulotlar: elektronika, maishiy texnika, bolalar tovarlari, kiyim-kechak va poyabzal, uy, sport, goʻzallik va sogʻliq uchun hamma mahsulotlar, kitoblar, uy hayvonlari uchun tovarlar va boshqalar. 12 oylik muddatli toʻlov. 1 kunda yetkazib berish. Uzum Marketda har kuni chegirmalar va aktsiyalar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FavoriteContextProvider>
        <SetDataContextProvider>
          <body className={roboto.className}>
            <Header />
            {children}
          </body>
        </SetDataContextProvider>
      </FavoriteContextProvider>
    </html>
  );
}
