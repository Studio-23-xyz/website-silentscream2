"use client";
import Link from "next/link";
import SilentScream2Logo from "../../../public/assets/silentscream2/silent-scram-2-logo.svg";

const Navbar = () => {
  return (
    <div className="w-full absolute flex justify-center items-center gap-6 md:gap-14 mt-2 md:mt-6 z-40">
      <Link href="/">
        <SilentScream2Logo />
      </Link>
    </div>
  );
};

export default Navbar;
