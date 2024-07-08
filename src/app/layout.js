import { Inria_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inria_serif = Inria_Serif({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Silent Scream 2",
  description: "Psychologycal-Puzzle-Horror Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/quill_icon.svg" sizes="any" />
      </head>
      <body className={inria_serif.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
