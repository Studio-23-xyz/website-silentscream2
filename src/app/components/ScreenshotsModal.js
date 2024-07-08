import Image from "next/image";

const ScreenshotModal = ({ isVisible, onClose, screenshot }) => {
  if (!isVisible || !screenshot) return null;

  return (
    <div
      className="fixed inset-0 bg-ss-full-bg w-[80%] md:w-full bg-no-repeat bg-black bg-opacity-25 backdrop-blur-sm 
      flex justify-center items-center bg-center bg-contain z-30"
      onClick={() => onClose()}
    >
      <div className="flex items-center justify-center">
        <Image
          src={screenshot.src}
          width={1771}
          height={985}
          alt={screenshot.alt}
          className="w-[85%] md:w-[75%] md:h-[70%] 2xl:w-[60%] 2xl:h-[75%] object-center pb-4 md:pb-12"
        />
      </div>
    </div>
  );
};

export default ScreenshotModal;
