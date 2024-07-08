import Image from "next/image";
import { useEffect, useState } from "react";
import Alan from "/public/assets/casts/Alan.png";
import Chad from "/public/assets/casts/Chad.png";
import Edger from "/public/assets/casts/Edgar.png";
import John from "/public/assets/casts/John.png";
import Linda from "/public/assets/casts/Linda.png";
import Marcus from "/public/assets/casts/Marcus.png";
import Tiffany from "/public/assets/casts/Tiffany.png";
import Quill from "/public/assets/quill.png";
import CastComponents from "./CastComponents";
import { Swiper, SwiperSlide } from "swiper/react";

const Cast = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/*Heading */}
      <div className="w-full flex flex-col justify-center items-center mt-12 mb-2 gap-6">
        <Image
          src={Quill}
          width={64}
          height={100}
          alt="Silent Scream 2 Icon"
          className="w-[64px] h-[100px]"
        />
        <h1 className="text-[20px] md:text-[40px] font-bold text-silent2_red">
          MEET THE CAST
        </h1>
      </div>

      <div>
        {isMobile ? (
          <Swiper spaceBetween={30} pagination={{ clickable: true }}>
            {items.map((item, index) => (
              <SwiperSlide key={index}>{item.content}</SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <CastComponents items={items} />
        )}
      </div>
    </div>
  );
};

export default Cast;

const items = [
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={John}
          width={350}
          height={668}
          alt="John"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={John}
            width={350}
            height={668}
            alt="John"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            John, The Writer
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            John, once a literary sensation, soared to fame with his debut novel
            but crumbled under the pressure of expectations. Struggling with
            writer&apos;s block, he turned to alcohol, which led to missed
            deadlines, breached contracts, and a shattered marriage.<br></br>{" "}
            <br></br>Now, he&apos;s determined to regain custody of his son and
            revive his career. A retreat at a mansion is his final attempt to
            find inspiration and rebuild his life.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Alan}
          width={393}
          height={650}
          alt="Alan"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Alan}
            width={393}
            height={650}
            alt="Alan"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Alan, Retired Detective
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            Alan was once a respected and promising police sergeant known for
            his sharp instincts and commitment to justice. However, his career
            was derailed after he impulsively shot a young suspect during a
            high-stress operation, leading to his dishonorable discharge and
            imprisonment. The incident left him plagued by guilt, sleepless
            nights, and an ongoing battle with his temper. Adding to his woes,
            Alan&apos;s wife died under suspicious circumstances, with neighbors
            suspecting his involvement despite the police ruling it a suicide.
            To reclaim his life, Alan started attending anger management therapy
            and is now determined to establish a private detective business,
            seeking redemption and purpose. However, the shadows of his past
            actions and neighborhood gossip continue to haunt him as he retreats
            to a mansion, hoping to leave his troubled history behind.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Chad}
          width={363}
          height={644}
          alt="Chad"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Chad}
            width={363}
            height={644}
            alt="Chad"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Chad, Gluttony
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium  text-center">
            Chad&apos;s high school years were a golden era where he was the
            star quarterback, admired by peers and favored by teachers. He
            thrived on the cheers and admiration, basking in glory. However,
            after high school, reality hit hard as he failed to pursue college
            or a meaningful career. Instead, Chad clung to his past, engaging in
            meaningless relationships and parties to relive his glory days. His
            promising football skills went to waste, and he became stuck in a
            cycle of nostalgia. Beneath his superficial demeanor lies deep
            frustration and insecurity over his inability to move forward.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Tiffany}
          width={304}
          height={667}
          alt="Tiffany"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Tiffany}
            width={304}
            height={667}
            alt="Tiffany"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
       gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Tiffany, Envy
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            Tiffany and Chad were high school sweethearts and the envy of their
            classmates, reigning as Prom Queen and King. Tiffany, with her
            stunning looks and charisma, was the head cheerleader, while
            Chad&apos;s athleticism and charm earned him the title of Prom King.
            After high school, they moved in together, eager to build a life
            side by side. Tiffany became a skilled nail technician at a local
            salon, showcasing her artistic talents, while Chad pursued his
            passion for fitness as a dedicated gym trainer. Though not wealthy,
            Tiffany and Chad were determined to make the best of their lives,
            continuing their love story beyond high school, embracing the
            challenges and joys of adulthood together.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Edger}
          width={373}
          height={678}
          alt="Edger"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Edger}
            width={373}
            height={678}
            alt="Edger"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Edger, Arcchaeologist
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            Edgar, an educated and unassuming man, has dedicated his life to
            archaeology, exploring remote corners of the world from Egypt&apos;s
            pyramids to the North Pole. With degrees in archaeology and
            anthropology, his insatiable curiosity has led to remarkable
            discoveries. Renowned for his meticulous excavation techniques and
            deciphering ancient scripts, Edgar sheds light on lost
            civilizations&apos; rituals and technologies.<br></br>
            <br></br>
            Despite his fame, Edgar remains humble, preferring his work to speak
            for itself. He mentors budding archaeologists, sharing his
            experiences and knowledge. In his retirement, he continues to
            travel, sharing stories with fellow explorers. His prized
            possession, a mythical sword cane unearthed from the Egyptian
            pyramids, symbolizes his illustrious career and connection to
            mysteries of the past. Though rumored to possess mythical powers,
            Edgar carries it as a treasured relic.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Linda}
          width={296}
          height={637}
          alt="Linda"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Linda}
            width={296}
            height={637}
            alt="Linda"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Linda, Doctor
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            Linda&apos;s upbringing emphasized academic excellence, leading her
            to become a skilled surgeon at Harvard Medical School. Tragedy
            struck when her parents died, prompting her to shift to Emergency
            Room and postmortem work for closure. Her dedication led to burnout
            and a mandated leave, forcing her to explore life beyond medicine
            for the first time.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: (
      <div className="flex justify-center items-start">
        <Image
          src={Marcus}
          width={344}
          height={648}
          alt="Marcus"
          className="w-[120px] md:w-[100px] h-[120px] md:h-[100px] object-cover object-top"
        />
      </div>
    ),
    content: (
      <div className="flex flex-col md:flex-row gap-4 mb-5">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image
            src={Marcus}
            width={344}
            height={648}
            alt="Marcus"
            className="w-[200px] md:w-[350px] h-[216px] md:h-[450px] object-cover object-top"
          />
        </div>
        <div
          className="w-full md:w-1/2 flex flex-col justify-center items-center px-4 md:pr-10 md:pl-0
         gap-3"
        >
          <h1 className="text-[18px] md:text-[32px] font-bold text-center">
            Marcus, Globe Trotter
          </h1>
          <p className="text-[14px] md:text-[16px] font-medium text-center">
            Marcus may seem like a charming globetrotter, but beneath his
            adventurous exterior lies a cunning conman with a history of
            fraudulent activities across multiple countries. Skilled in identity
            theft, scams, and elaborate frauds, he attends events like the
            mansion&apos;s retreats not for adventure, but for opportunities for
            theft and deception. Marcus&apos;s rap sheet includes art thefts,
            Ponzi schemes, and elaborate heists. He excels at infiltrating
            high-society circles, manipulating people to his advantage, all
            while maintaining a façade of sophistication and worldliness.
          </p>
        </div>
      </div>
    ),
  },
];
