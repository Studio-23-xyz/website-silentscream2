const Director = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center mt-6">
        <div
          className="flex flex-col justify-center items-center w-[290px] md:w-[1320px] h-[617px] md:h-[432px]
             bg-banner-bg-mm md:bg-banner-bg-lm bg-no-repeat bg-center gap-3 md:gap-9"
        >
          <h3
            className="text-[20px] md:text-[40px] font-bold text-silent2_button_text mx-8 mt-1
               text-center leading-6"
          >
            WORDS FROM THE GAME DIRECTOR
          </h3>
          <p
            className="text-[14px] md:text-[20px] font-bold text-silent2_button_text text-center
             mx-11 md:mx-14 leading-5 md:leading-10 flex flex-col gap-4 justify-center items-center"
          >
            As the Game Director, I am dedicated to revolutionizing the game
            development landscape in Bangladesh, step by step. Silent Scream 2
            represents a major leap in this journey, showcasing our commitment
            to excellence and innovation. We've poured our hearts into creating
            this game, and I sincerely hope you find as much joy in playing it
            as we did in bringing it to life. Your support and enjoyment are
            what drive us to keep pushing the boundaries.
            <a className="text-[16px] md:text-[22px] font-black">
              Tanimul Haque Khan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
