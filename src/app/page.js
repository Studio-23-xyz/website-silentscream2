"use client";
import { useEffect } from "react";
import Parallax from "./components/Parallax";
import Button from "./components/Button";
import Pitch from "./components/Pitch";
import Director from "./components/Director";
import Cast from "./components/Cast";
import Screenshots from "./components/Screenshots";
import Itchio from "./components/Itchio";
import TeamMembers from "./components/TeamMembers";
import About from "./components/About";

const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="min-h-screen">
        {/* parallax Section */}
        <Parallax />

        {/* Button Section */}
        <Button />

        {/* Pitch Section */}
        <Pitch />

        {/* Director Section */}
        <Director />
        {/* Cast Section */}
        <Cast />

        <div className="bg-quill-bg bg-center md:bg-right">
          <div className="bg-black bg-opacity-80">
            {/* Screenshot Section */}
            <Screenshots />

            {/* Itchio Section */}
            <Itchio />

            {/* Team Member Section */}
            <TeamMembers />

            {/* About Section */}
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
