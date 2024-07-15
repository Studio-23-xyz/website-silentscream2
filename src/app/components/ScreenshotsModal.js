import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ScreenshotModal = ({
  isVisible,
  onClose,
  screenshot,
  onNext,
  onPrevious,
}) => {
  if (!isVisible || !screenshot) return null;

  return (
    <div
      className="fixed inset-0 bg-ss-full-bg w-full md:w-full bg-no-repeat bg-black bg-opacity-25 backdrop-blur-sm 
      flex justify-center items-center bg-center bg-contain z-30"
      onClick={() => onClose()}
    >
      <div className="relative flex items-center justify-center">
        <button
          className="absolute left-0 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <Image
          src={screenshot.src}
          width={1771}
          height={985}
          alt={screenshot.alt}
          className="w-[85%] md:w-[75%] md:h-[70%] 2xl:w-[60%] 2xl:h-[75%] object-center pb-4 md:pb-12"
        />

        <button
          className="absolute right-0 transform -translate-y-1/2 text-white bg-gray-700 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default ScreenshotModal;
