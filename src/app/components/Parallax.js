import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ss2LogoWhite from "../../../public/assets/SS2_logo_white.png";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const layer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], ["0", "200%"]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], ["0", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <div>
        <motion.div
          className="absolute inset-0 z-0 bg-parallax-bg1 bg-cover bg-center bg-no-repeat"
          style={{
            y: layer1Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 z-10 bg-parallax-bg2 bg-cover bg-center md:bg-contain bg-no-repeat"
          style={{
            y: layer2Y,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 z-20 bg-parallax-bg3 bg-cover bg-center bg-no-repeat"
          style={{
            y: layer3Y,
          }}
        ></motion.div>
        <Image
          src={ss2LogoWhite}
          width={196}
          height={154}
          alt="Studio 23 Logo"
          className="w-[75px] md:w-[196px] h-[62px] md:h-[154px]"
        />
        <motion.div
          className="absolute inset-0 bg-parallax-bg4 z-30 bg-cover md:bg-cover bg-center"
          style={{}}
        ></motion.div>
      </div>
      <Image
        src={ss2LogoWhite}
        width={471}
        height={304}
        alt="Silent Scream 2 Logo"
        className="w-[250px] md:w-[471px] h-auto md:h-[304px] z-30 mb-80 opacity-90"
      />
    </div>
  );
};

export default Parallax;
