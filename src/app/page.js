"use client";
import { useEffect } from "react";
import About from "./components/About";
import Button from "./components/Button";
import Cast from "./components/Cast";
import Director from "./components/Director";
import Itchio from "./components/Itchio";
import Parallax from "./components/Parallax";
import Pitch from "./components/Pitch";
import Screenshots from "./components/Screenshots";
import TeamMembers from "./components/TeamMembers";

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
