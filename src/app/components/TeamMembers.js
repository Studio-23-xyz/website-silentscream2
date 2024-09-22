import Image from "next/image";
import Quill from "/public/assets/quill.png";

const TeamMembers = () => {
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
          TEAM MEMBERS
        </h1>
      </div>

      {/* ------------Names Section------------ */}

      <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-center items-center mt-5 md:mt-16 mx-4 md:mx-20">
        <div>
          {/* Game Director */}
          <div className="h-[120px] md:h-[150px] flex flex-col justify-start items-center">
            <h1 className="text-[32px] font-bold text-silent2_red">
              Game Director
            </h1>
            <p className="text-[24px] text-white">Tanimul Haque Khan</p>
          </div>

          {/* 2nd Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-20">
            {/* Project Manager */}
            <div className="h-[100px] md:h-[130px] flex flex-col md:col-start-1 justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Project Manager
              </h1>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
            </div>
            {/* Art Director */}
            <div className="h-[100px] md:h-[130px] flex flex-col md:col-start-2 justify-start items-center">
              <h1 className="text-[22px] text-silent2_red font-bold">
                Art Director
              </h1>
              <p className="text-[20px] text-white">Inamul Tahsin</p>
            </div>
            {/* Lead Artist */}
            <div className="h-[100px] md:h-[130px] flex flex-col md:col-start-3 justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Lead Artist
              </h1>
              <p className="text-[20px] text-white">Mahmoda Ferdous</p>
            </div>
            {/* Music Director */}
            <div className="h-[100px] md:h-[130px] flex flex-col md:col-start-4 justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Music Director
              </h1>
              <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
            </div>
          </div>

          {/* 3rd Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-20">
            {/* Tech Lead */}
            <div className="h-[100px] md:h-[350px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Tech Lead
              </h1>
              <p className="text-[20px] text-white">Tanimul Haque Khan</p>
            </div>
            {/* Level Designers */}
            <div className="h-[170px] md:h-[350px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Level Designers
              </h1>
              <p className="text-[20px] text-white">Fahim Faisal</p>
              <p className="text-[20px] text-white">Nurusshafi Evan</p>
              <p className="text-[20px] text-white">Md. Maruf Howlader</p>
            </div>
            {/* Art Team */}
            <div className="h-[190px] md:h-[350px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Art Team
              </h1>
              <p className="text-[20px] text-white">Sanim Ahmed Niloy</p>
              <p className="text-[20px] text-white">Iftekhar Alan Khan</p>
              <p className="text-[20px] text-white">Shushanto Chowdhury</p>
              <p className="text-[20px] text-white">Adnan Farid</p>
            </div>
            {/* Game Programmers */}
            <div className="h-[320px] md:h-[350px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Game Programmers
              </h1>
              <p className="text-[20px] text-white">Zubair Islam</p>
              <p className="text-[20px] text-white">Dipok Sarker Dipu</p>
              <p className="text-[20px] text-white">Fahim Faisal</p>
              <p className="text-[20px] text-white">Nurusshafi Evan</p>
              <p className="text-[20px] text-white">Md. Maruf Howlader</p>
              <p className="text-[20px] text-white">MD Rasheeq Ishraq Kamal</p>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
              <p className="text-[20px] text-white">Tanimul Haque Khan</p>
            </div>
            
          </div>

          {/* 4th Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-20">
            {/* Quality Assurance */}
            <div className="h-[100px] md:h-[130px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Quality Assurance
              </h1>
              <p className="text-[20px] text-white">Shahadat Hossain Shamim</p>
            </div>
            {/* Animator */}
            <div className="h-[100px] md:h-[130px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Animator
              </h1>
              <p className="text-[20px] text-white">Enan Abdullah Khan</p>
            </div>
            {/* Narrative Design */}
            <div className="h-[100px] md:h-[130px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Narrative Design
              </h1>
              <p className="text-[20px] text-white">Inamul Tahsin</p>
            </div>
            {/* Special Thanks */}
            <div className="h-[100px] md:h-[130px] flex flex-col justify-start items-center">
              <h1 className="text-[22px] font-bold text-silent2_red">
                Special Thanks
              </h1>
              <p className="text-[20px] text-white">Generative AI</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
