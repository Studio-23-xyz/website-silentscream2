import Image from "next/image";
import Studio23logoBlack from "/public/assets/studio23-logo-black.png";

const About = () => {
  return (
    <div className="pb-10">
      <div className="w-full flex justify-center items-center mt-6">
        <div
          className="flex flex-col md:flex-row justify-center items-center w-[290px] md:w-[1320px] h-[617px] md:h-[432px]
           bg-banner-bg-mm md:bg-banner-bg-lm bg-no-repeat bg-center gap-10 md:gap-9"
        >
          <div className="md:w-2/5 flex justify-center items-center">
            <a 
              href="https://www.studio-23.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Image
                src={Studio23logoBlack}
                width={196}
                height={154}
                alt="Studio 23 Logo"
                className="w-[75px] md:w-[196px] h-[62px] md:h-[154px]"
              />
            </a>
          </div>

          <div className="flex flex-col gap-8 md:gap-4 md:w-3/5">
            <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_button_text text-center justify-center items-center">
              ABOUT STUDIO 23
            </h1>
            <p
              className="text-[14px] md:text-[20px] font-bold text-silent2_button_text text-center
              mx-11 md:mx-14 leading-5 md:leading-10 flex justify-center items-center"
            >
              Studio 23 is the dedicated in-house game studio of BrainStation
              23. We are passionate gamers and developers committed to creating
              high-quality, enjoyable games. As creative partner, we collaborate
              with studios worldwide, offering guidance and support while
              preserving our unique and independent spirit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
