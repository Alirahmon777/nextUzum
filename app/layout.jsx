import "../styles/globals.css";
import "./header.scss";
import "./card.scss";

import Header from "./ui/Header";

import { Inter, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Uzum Market — internet-doʻkon",
  description:
    "Katta miqdorda chegirmali mahsulotlar: elektronika, maishiy texnika, bolalar tovarlari, kiyim-kechak va poyabzal, uy, sport, goʻzallik va sogʻliq uchun hamma mahsulotlar, kitoblar, uy hayvonlari uchun tovarlar va boshqalar. 12 oylik muddatli toʻlov. 1 kunda yetkazib berish. Uzum Marketda har kuni chegirmalar va aktsiyalar!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
