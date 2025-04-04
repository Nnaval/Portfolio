import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "NnaVal | Web Developer",
  description: "Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <NavBar className="sticky top-0 z-50" />
          <main className="flex-grow">
            {children}
            </main>
          <Footer className="mt-auto" />
        </div>
      </body>
    </html>
  );
}
