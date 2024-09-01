import Image from "next/image";
import { Fragment, useState } from "react";
import ScreenshotModal from "./ScreenshotsModal";
import Screenshot1 from "/public/assets/screenshots/ss2-ss-01.jpg";
import Screenshot2 from "/public/assets/screenshots/ss2-ss-02.jpg";
import Screenshot3 from "/public/assets/screenshots/ss2-ss-03.jpg";
import Screenshot4 from "/public/assets/screenshots/ss2-ss-04.jpg";
import Screenshot5 from "/public/assets/screenshots/ss2-ss-05.jpg";
import Screenshot6 from "/public/assets/screenshots/ss2-ss-06.jpg";
import Screenshot7 from "/public/assets/screenshots/ss2-ss-07.jpg";
import Screenshot8 from "/public/assets/screenshots/ss2-ss-08.jpg";
import Screenshot9 from "/public/assets/screenshots/ss2-ss-09.jpg";

const screenshots = [
  { src: Screenshot1, alt: "Screenshot - Main Menu" },
  { src: Screenshot2, alt: "Screenshot - Grandhall" },
  { src: Screenshot3, alt: "Screenshot - Grandhall Writer Vision" },
  { src: Screenshot4, alt: "Screenshot - Journal: Characters" },
  { src: Screenshot5, alt: "Screenshot - Journal: Inventory" },
  { src: Screenshot6, alt: "Screenshot - Lobby" },
  { src: Screenshot7, alt: "Screenshot - Dining Room" },
  { src: Screenshot8, alt: "Screenshot - Portrait" },
  { src: Screenshot9, alt: "Screenshot - Living Room" },
];

const Screenshots = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(null);

  const openModal = (index) => {
    setCurrentScreenshotIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentScreenshotIndex(null);
  };

  const goToNext = () => {
    setCurrentScreenshotIndex(
      (prevIndex) => (prevIndex + 1) % screenshots.length
    );
  };

  const goToPrevious = () => {
    setCurrentScreenshotIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  const backgroundClasses = [
    "bg-ss-small-bg1",
    "bg-ss-small-bg2",
    "bg-ss-small-bg3",
    "bg-ss-small-bg4",
    "bg-ss-small-bg5",
    "bg-ss-small-bg6",
  ];

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center mt-2 mb-6">
        <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_red">
          SCREENSHOTS
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <iframe
          className="w-[90%] md:w-[822px] aspect-video"
          src="https://www.youtube.com/embed/mBd99SRJbJw?si=tfID6T5sBv5ao8LU"
          title="Silent Scream 2 Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Screenshots */}
      <Fragment>
        <div className="w-full h-auto flex justify-center items-center mt-6 md:mt-12 mb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-5 md:gap-y-10 justify-center">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className={`${
                  backgroundClasses[index % backgroundClasses.length]
                } w-[133px] md:w-[368px] h-[182px] md:h-[504px] px-3 md:px-6 pt-5 md:pt-9 pb-7 md:pb-16 bg-cover 
                  transform transition-transform duration-300 hover:scale-105 hover:brightness-110`}
                onClick={() => openModal(index)}
              >
                <Image
                  src={screenshot.src}
                  width={1771}
                  height={985}
                  alt={screenshot.alt}
                  className="h-full object-cover"
                />
              </div>
            ))}
          </div>
          {showModal && (
            <ScreenshotModal
              isVisible={showModal}
              onClose={closeModal}
              screenshot={screenshots[currentScreenshotIndex]}
              onNext={goToNext}
              onPrevious={goToPrevious}
            />
          )}
        </div>
      </Fragment>
    </div>
  );
};

export default Screenshots;
