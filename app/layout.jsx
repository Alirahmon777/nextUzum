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
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        type: "image/x-icon",
        sizes: "any",
      },
    ],
    maskIcon: "/favicon/safari-pinned-tab.svg",
    shortcut: "/favicon/shortcut-icon.png",
    other: [
      {
        rel: "apple-touch-icon",
        url: "/favicon/apple-touch-icon.png",
        sizes: "120x120",
      },
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
        color: "#5bbad5",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },

  manifest: "/favicon/site.webmanifest",
  description:
    "Katta miqdorda chegirmali mahsulotlar: elektronika, maishiy texnika, bolalar tovarlari, kiyim-kechak va poyabzal, uy, sport, goʻzallik va sogʻliq uchun hamma mahsulotlar, kitoblar, uy hayvonlari uchun tovarlar va boshqalar. 12 oylik muddatli toʻlov. 1 kunda yetkazib berish. Uzum Marketda har kuni chegirmalar va aktsiyalar!",
};
{
  //  <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png">
  // <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  // <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  // <link rel="manifest" href="/site.webmanifest">
  // <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  // <meta name="msapplication-TileColor" content="#da532c">
  // <meta name="theme-color" content="#ffffff"></meta>
}

export default function RootLayout({ children }) {
  return (
    <FavoriteContextProvider>
      <SetDataContextProvider>
        <html lang="en">
          <body className={roboto.className}>
            <Header />
            {children}
          </body>
        </html>
      </SetDataContextProvider>
    </FavoriteContextProvider>
  );
}
