import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers.jsx";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
