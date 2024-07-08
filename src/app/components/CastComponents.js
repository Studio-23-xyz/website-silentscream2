import { useEffect, useRef, useState } from "react";

const CastComponents = ({ items }) => {
  const firstBtnRef = useRef();
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {
    firstBtnRef.current.focus();
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-col w-[90%] md:w-[80%]">
        {/* Content Section */}
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${selectedTab === index ? "" : "hidden"}`}
            >
              {item.content}
            </div>
          ))}
        </div>

        {/* Tab Section */}
        <div className="grid grid-cols-2 md:flex md:flex-row md:justify-between items-center gap-x-2">
          {items.map((item, index) => (
            <button
              ref={index === 0 ? firstBtnRef : null}
              key={index}
              onClick={() => setSelectedTab(index)}
              className="outline-none w-full p-2 hover:bg-slate-500 rounded-xl
                         focus:ring-2 focus:bg-slate-900"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CastComponents;
