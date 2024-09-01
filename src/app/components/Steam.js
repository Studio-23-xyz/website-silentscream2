
const Steam = () => {
    return (
        <div className="w-full flex justify-center items-center mt-10">
          <div className="w-full">
            <div className="flex justify-center">
              <iframe src="https://store.steampowered.com/widget/3023460/"
              frameborder="0" 
              className="w-full max-w-[300px] sm:max-w-[646px]"
                        height="190"
              ></iframe>
            </div>
          </div>
        </div>
    );
};

export default Steam;