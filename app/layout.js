import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Store Next",
  description: "Generated by create next app",
};

export default function RootLayout({ modal, children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen flex flex-col bg-gradient-to-r">
        <NavBar />

        <main className="flex-grow">
          {children}
          {modal}
        </main>
        <Footer />
      </body>
    </html>
  );
}
