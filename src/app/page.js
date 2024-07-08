"use client";
import { useEffect } from "react";
import Parallax from "./components/Parallax";

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
