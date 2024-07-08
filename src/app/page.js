"use client";
import { useEffect } from "react";
import Parallax from "./components/Parallax";
import Button from "./components/Button";

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

        {/* Director Section */}

        {/* Cast Section */}

        <div className="bd-ss2-quill-bg bg-center md:bg-right">
          <div className="bg-black bg-opacity-80">
            {/* Screenshot Section */}

            {/* Itchio Section */}
            {/* Team Member Section */}
            {/* About Section */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
